const cancelBtn = document.querySelector('#cancel');
//1. binding with event function name
// cancelBtn.onclick = showMessage;

// function showMessage() {
//   alert('you click on cancel button now!');
// }

//2. binding with event function expression
cancelBtn.onclick = function () {
  alert('you click on cancel button now!');
};

//2. binding with event function expression
cancelBtn.onclick = function (event) {
    alert(`you click on cancel button now!: ${event.target.id}`);
  };

  const okBtn = document.querySelector('#submitOK');
  okBtn.addEventListener('click', addProduct, true);
  // okBtn.removeEventListener('click', addProduct);
  function addProduct(event) {
    alert(`event target: ${event.target}
          event current target : ${event.currentTarget} 
          event target id: ${event.target.id} 
          event phase: ${event.eventPhase}
          event type: ${event.type}`);
  }
  
  const divBtnPanel = document.querySelector('#divButtonPanel');
  divBtnPanel.addEventListener(
    'click',
    (event) => {
      alert(`click on div panel was fired!,
    event target: ${event.target}
      event current target : ${event.currentTarget} 
          event target id: ${event.target.id} 
          event phase: ${event.eventPhase}
          event type: ${event.type}`);
    },
    true
  );