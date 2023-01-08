import React,{useState} from 'react'

export default function Textform(props) {
  const [text,setText]=useState("")
    const handleUpclick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted To UpperCase", "success")
      }
      const handleOnchange=(event)=>{
        setText(event.target.value)
      }
      const handlelowclick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Text Converted To LowerCase", "success")
      }
      const handleclrclick=()=>{
        let newText='';
        setText(newText)
       props.showAlert("Text cleared", "success")
      }
      const handlecopyclick=()=>{
        let text=document.getElementById("Mybox").value;
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success")
        document.getSelection().removeAllRanges();
      }
      const handlespaceclick=()=>{
        const newtext=text.split(/[ ]+/);
        setText(newtext.join(' '))
        props.showAlert("Extra Space Removed", "success")
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="Mybox" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'#042743':'white'}} rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert To UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>Convert To LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclrclick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopyclick}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlespaceclick}>Remove Extra Space</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='light'?'#042743':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length} Charecters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h1>Preview</h1>
        <p>{text?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
