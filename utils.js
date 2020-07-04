/**
 * Beat class that keeps track of playing the audio
 */
class Beat {
    constructor(audioSrc){
        this.audioSrc = audioSrc;
    }
    playAudio = () => {
        let playAudios = new Audio(this.audioSrc);
        playAudios.play();
        playAudios.currentTime = 0;
    }

}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.setTransitionend();

    }

    setTransitionend = () => {
        this.element.addEventListener("transitionend", () => {
            this.deselect();
        })

    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;

    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = 'transparent';
        this.element.style.boxShadow = 'none';
    }
}