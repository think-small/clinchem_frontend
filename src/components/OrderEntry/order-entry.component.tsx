import "./order-entry.styles.scss";
import { Autocomplete, Button } from "react-materialize";
import React, {FC, useState, useEffect, ChangeEvent} from "react";
import {apiCaller} from "../../Utils/apiCaller";

interface autocompleteData {
    [key: string]: any
}

interface autocompleteProps {
    onClick(e:any): any
}

const OrderEntry:FC<autocompleteProps> = (props) => {
    const [testNames, setTestNames] = useState({});
    const [testToOrder, setTestToOrder] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setTestToOrder(() => value);
    }

    const handleClick = () => {
        props.onClick(testToOrder);
        setTestToOrder("");
    }

    useEffect(() => {
        apiCaller<String>('https://localhost:44366/api/tests')
            .then(res => {
                if (Array.isArray(res))
                {
                    const testNamesCollection: autocompleteData = {};
                    const panelNames = ['BMP', 'CMP', 'HFT', 'Renal Panel', 'Lipid Panel', 'Iron Panel'];

                    res.forEach(str => testNamesCollection[str.replaceAll('_', ' ')] = null);
                    panelNames.forEach(str => testNamesCollection[str] = null);

                    setTestNames(testNamesCollection);
                }
            });
    }, []);

    return (
        <div className={'order-entry-div'}>
            <Autocomplete
                id={'order-entry'}
                placeholder={'Enter test name'}
                onChange={handleChange}
                value={testToOrder}
                options={{
                    data: testNames,
                    limit: 5,
                    minLength: 2,
                    onAutocomplete: (e) => setTestToOrder(e)
                }}
            />
            <Button
                node={"button"}
                waves={"light"}
                onClick={handleClick}
            >
                Submit Order
            </Button>
        </div>
    );
}

export default OrderEntry;