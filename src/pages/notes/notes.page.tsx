import React, { FC, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Collapsible, CollapsibleItem } from "react-materialize";
import "./notes.styles.scss";
import { INote } from "../../models/INote";
import { apiCaller} from "../../Utils/apiCaller";
import FormattedText from "../../components/FormattedText/formattedtext.component";

interface notesProps {
  notes: INote[]
}

const NotesPage: FC<notesProps> = (props) => {
  const [notes, setNotes] = useState<INote | INote[]>([]);

  useEffect(() => {
    apiCaller<INote>(`${process.env.REACT_APP_NOTES_API}/1`)
        .then(res => setNotes(res));
  }, [])

  if (Array.isArray(notes)) {
    return (
        <section className={'notes-section'}>
          <Collapsible accordion={true} className={'collapsible-notes'}>
            {notes.map(note => {
                const datetime = new Date(Date.parse(note.timestamp.toString()));
                const header = datetime.toLocaleString();
                const content = note.content.split('\\n');

                return (
                    <CollapsibleItem key={uuidv4()}
                                     header={header}
                                     expanded={false}
                                     onSelect={() => {
                                     }}>
                        {content.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </CollapsibleItem>
                )})}
          </Collapsible>
        </section>
    )
  }
  else {
    return <section className="notes-section">Notes Page</section>
  }
};

export default NotesPage;
