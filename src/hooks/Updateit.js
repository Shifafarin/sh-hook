import React from 'react'
import { useState } from 'react' //useState is a hook
import Alert from './Alert'

const Updateit = () => {

    const [text, settxt] = useState('');

    const [alert, setalert] = useState(
        {
            type: null,
            msg: 'Checkout our Text Examine Feature.'
        }
    )
    const setalertmsg = (t, m) => {
        setalert({
            type: t,
            msg: m
        })
        setTimeout(() => {
            setalert(null);
        }, 1000);
    }

    const handleonclick_R = () => {
        let newtext = text.split(/[ ]+/);
        settxt(newtext.join(" "));
        setalertmsg('Success', 'Removed extra spaces');
        console.log(alert)
    }

    const handleonchange = (event) => {
        console.log(event.target.value);
        settxt(event.target.value);
    }

    const handleonclick_U = () => {
        let newtext = text.toUpperCase();
        settxt(newtext);

        setalertmsg('Success', 'case changed to uppercase');


    }
    const handleonclick_L = () => {
        let newtext = text.toLowerCase();
        settxt(newtext)
        setalertmsg('Success', 'case changed to lowercase');
    }
    const handleonclick_D = () => {
        settxt('')
        setalertmsg('Success', 'Textarea cleared');
    }
    const handleonclick_Cpy = () => {
        // var txt=document.getElementById('txtarea');
        // txt.select();
        navigator.clipboard.writeText(text);
        setalertmsg('Success', 'Text copied to clipboard');
    }
    const handleonclick_C = () => {
        var newText2;

        let remText = text.replace(/ /g, "");
        remText = remText.replace(/(\r\n|\n|\r|)/gm, "");
        let newtext1 = remText.length;
        newText2 = ((text.split(/\s+/).filter((element) => { return element.length !== 0 })).length);
        let final = "Character Count : " + newtext1 + ' Word Count : ' + newText2;
        return final;
    }

    return (
        <div>
            <Alert alert={alert} />
            <h1>Examine Text</h1>
            <div>
                <div>
                    <textarea value={text} onChange={handleonchange} id='txtarea'></textarea>

                </div>

                <div>
                    <p>
                        {handleonclick_C()}
                        <p>{0.008 * text.split("").length} Minutes read</p>
                    </p>

                </div>

            </div>
            <div className='my-3'>
                <button className="btn btn-outline-success" onClick={handleonclick_U}>Upper case</button>
                <button className="btn btn-outline-success" onClick={handleonclick_L}>Lower case</button>
                <button className="btn btn-outline-success" onClick={handleonclick_D}>Clear</button>
                <button className="btn btn-outline-success" style={{ width: 'max-content' }} onClick={handleonclick_R}>Remove extra spaces</button>
                <button className="btn btn-outline-success" onClick={handleonclick_Cpy}>Copy</button>
            </div>
        </div>
    )
}

export default Updateit;