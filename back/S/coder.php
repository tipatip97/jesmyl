<?function coder($code, $compileAction, $saveAction) {?>
<meta charset="utf-8"/>

<textarea
  style="width:100%; height: 50%;"
  id=the_code_Window
  ><?echo $code;?></textarea>
<div>
  <button id="the_compile_Button" onclick="the_compile_action()" >Compile</button>
  <button id="the_save_Button" onclick="the_save_action()" >Save</button>
  <span style="color:blue">call write() for output; press ctrl + enter to compile; press ctrl + shift + enter to save on server;</span>
</div>
<pre id=output></pre>
<script>


the_code_Window.addEventListener('keydown', (event) => {
  console.log(event, window.getSelection());
  if (event.keyCode === 13 && event.ctrlKey) {
    event.preventDefault();
    if (event.shiftKey) the_save_action();
    else the_compile_action();
    
  } else if (event.code === 'Tab') {
  
    event.preventDefault();
    const sel = window.getSelection().toString();
    const newText = event.shiftKey ? sel.replace(/\n  /g, '\n') : sel.replace(/\n/g, '\n  ') || '  ';
    
    document.execCommand('insertText', true, newText);
    
  } else if (event.keyCode === 191 && event.ctrlKey) {
  
    event.preventDefault();
    const sel = window.getSelection().toString();
    const newText = event.shiftKey
      ? /^[\s\n ]*\/\*(\w|\W)*\*\/[\s\n ]*$/.test(sel)
        ? sel.replace(/^([\n\s ]*)\/\*((\w|\W)*)\*\/([\s\n ]*$)/g, '$1$2$4')
        : `/*${sel}*/`
      : /^([^\n]*\n?)\/\//.test(sel)
        ? sel.replace(/((^|\n)\s*)\/\/(\s*)/g, '$1$3')
        : sel.replace(/\n/g, '\n//');
        
    
    document.execCommand('insertText', true, newText);
    
  } else if (event.code === 'KeyD' && event.ctrlKey) {
    event.preventDefault();
    const text = window.getSelection().toString();
    document.execCommand('insertText', true, text);
    document.execCommand('insertText', true, text);
  }
  
});
function the_compile_action(event) {
<?echo $compileAction;?>
}

function write(text, type = 1, html) {
  const wr = (txt, t, h) => {
    output.style.color = ['red', 'black'][t];
    if (txt !== undefined) output.innerText += txt;
    if (h !== undefined) output.innerHTML += h;
  };
  output.innerHTML = '';
  wr(text, type, html);
  
  const bag = {
    write: (txt, t, h) => {
      wr(txt, t, h);
      return bag;
    },
    lnwrite: (txt, t, h) => {
      wr(`\n${txt}`, t, h == null ? null : `\n${h}`);
      return bag;
    },
    writeln: (txt, t, h) => {
      wr(`${txt}\n`, t, h == null ? null : `${h}\n`);
      return bag;
    }
  };
  return bag;
}



function the_save_action(event) {
  <?echo $saveAction;?>
}

</script>

<?}?>




