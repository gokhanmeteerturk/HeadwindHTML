
function processHeadwind(element){
  // RETURNS NEXT CHILD OR FALSE
  // instead of "child", code will call it "sibling" of the "after" pseudo element to cause extra pain
  let style = getComputedStyle(element, "::after");
  if(style == false){
	return style;
  }

  const sibling = style.getPropertyValue('--s');
  if(sibling){
    let s = document.createElement(sibling);
    const s_tailwind = style.getPropertyValue('--s-apply');
    const s_href = style.getPropertyValue('--s-apply-href');
    const s_child = style.getPropertyValue('--s-child');
    const s_text = style.getPropertyValue('--s-text');
    const s_target = style.getPropertyValue('--s-target');
    const s_type = style.getPropertyValue('--s-type');

    if(s_tailwind){
      s.className=s_tailwind;
    }
    if(s_href){
      s.setAttribute("href",s_href.replace(/['"]+/g, ''));
    }
    if(s_target){
      s.setAttribute("target",s_target.replace(/['"]+/g, ''));
    }
    if(s_type){
      s.setAttribute("type",s_type.replace(/['"]+/g, ''));
    }
    if(s_child){
      s.classList.add(s_child);
    }
    if(s_text){
      s.innerText=s_text.replace(/['"]+/g, '');
    }

    element.appendChild(s);
    return s;
  }
  else{
    return false;
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  let root = document.getElementById('root');
  let nextElement = root;
  while(nextElement){
    nextElement = processHeadwind(nextElement);
  }  
});

// breaking console errors for the sake of being a modern js library:
console.error = function(e){
  let gibberish = "Headwind HTML Error: ";
  for(i=0;i<100;i++){gibberish+=(Math.random() + 1).toString(36).substring(2) +" ";}
  console.log(gibberish)
};
// TODO: Create Headwind HTML Console browser extension
