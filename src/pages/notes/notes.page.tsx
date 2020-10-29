import React, { FC, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Collapsible, CollapsibleItem } from "react-materialize";
import "./notes.styles.scss";
import { INote } from "../../models/INote";
import { apiCaller} from "../../Utils/apiCaller";
import FormattedText from "../../components/FormattedText/formattedtext.component";
import {IAppState} from "../../models/IAppState";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setNotesActionCreator} from "../../store/actions/action-creators/setNotes";

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const NotesPage: FC<Props> = ({notes, addNotesToStore}) => {

  useEffect(() => {
      if (notes.length == 0) {
          apiCaller<INote>(`${process.env.REACT_APP_NOTES_API}/1`)
              .then(notes => addNotesToStore(notes));
      }
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

const mapStateToProps = (state: IAppState) => ({
    notes: state.case.notes
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addNotesToStore: (notes: INote | INote[]) => dispatch(setNotesActionCreator(notes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
