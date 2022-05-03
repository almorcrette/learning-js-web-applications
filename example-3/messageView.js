class MessageView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');
    this.hidebuttonEl = document.querySelector('#hide-message-button');
    
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();

    this.hidebuttonEl.addEventListener('click', () => {
      this.hideMessage();
    })
    });
  }

  displayMessage() {
    // console.log('Thanks for clicking me!');
    let newElement = document.createElement('div')
    newElement.id = 'message';
    newElement.innerText = "This message displayed by JavaScript";
    this.mainContainerEl.append(newElement);
  }

  hideMessage() {
    let elementRemove = document.querySelector('#message')
    elementRemove.remove();
  }
}

module.exports = MessageView;