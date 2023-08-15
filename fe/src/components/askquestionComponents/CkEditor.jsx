import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CkEditor () {
    return (
        <div className="App">
            
            <CKEditor
                editor={ ClassicEditor }
                data=""
                config={{
                    
                }}
                // onReady={ editor => {
                //     // You can store the "editor" and use when it is needed.
                // } }
                // onChange={ ( event, editor ) => {
                //     const data = editor.getData();
                //     console.log( { event, editor, data } );
                // } }
                // onBlur={ ( event, editor ) => {
                //     console.log( 'Blur.', editor );
                // } }
                // onFocus={ ( event, editor ) => {
                //     console.log( 'Focus.', editor );
                // } }
            />
        </div>
    );
}
export default CkEditor;