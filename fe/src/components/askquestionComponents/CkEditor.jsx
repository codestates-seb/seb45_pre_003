import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';

function CkEditor ({setEditorData}) {
    return (
        <div className="App">
            <CKEditor
                editor={CustomEditor}
                data=""
                config={{
                    
                }}
                // onReady={ editor => {
                //     // You can store the "editor" and use when it is needed.
                // } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setEditorData(data);
                } }
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