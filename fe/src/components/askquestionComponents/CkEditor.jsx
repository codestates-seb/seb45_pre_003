import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import styled from 'styled-components';
import Parser from 'html-react-parser';

const CustomEditorStyle = styled.div`
    & > * .ck-content {
        min-height:250px;
    }
`

export const getLengthOfEditor = (editorData) => {
    let result = 0;
    if(Array.isArray(editorData)) {
        for(let i = 0; i < editorData.length; i++) {
            const stack = [editorData[i].props.children];
            while(stack.length !== 0) {
                let cur = stack.pop();
                if(typeof(cur) === 'string') {
                    result+=cur.length;
                } else if (Array.isArray(cur)) {
                    for(let j = 0; j < cur.length; j++) {
                        if(cur[j].props.children) {
                            stack.push(cur[j].props.children)
                        }
                    }
                } else {
                    if(cur.props.children) {
                        stack.push(cur.props.children)
                    }
                }
            }
        }
    } else {
        const stack = [editorData.props.children];
        while(stack.length !== 0) {
            let cur = stack.pop();
            if(typeof(cur) === 'string') {
                result+=cur.length;
            } else if (Array.isArray(cur)) {
                for(let j = 0; j < cur.length; j++) {
                    if(cur[j].props.children) {
                        stack.push(cur[j].props.children)
                    }
                }
            } else {
                if(cur.props.children) {
                    stack.push(cur.props.children)
                }
            }
        }
    }
    return result;
}

function CkEditor ({setEditorData,setDatalen}) {
    return (
        <CustomEditorStyle className='App'>
            <CKEditor
                editor={CustomEditor}
                data=""
                // onReady={ editor => {
                //     // You can store the "editor" and use when it is needed.
                // } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setEditorData(data);
                    setDatalen(getLengthOfEditor(Parser(data)));
                } }
                // onBlur={ ( event, editor ) => {
                //     console.log( 'Blur.', editor );
                // } }
                // onFocus={ ( event, editor ) => {
                //     console.log( 'Focus.', editor );
                // } }
            />
        </CustomEditorStyle>
    );
}
export default CkEditor;