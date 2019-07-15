let canvas = document.getElementById('light');
let ctx = canvas.getContext('2d');

let ElectricLamp = function (status, width, height) {
    this.status = status;
    this.width = width;
    this.height = height;

    this.turnOn = function () {
        this.status = 'On';
    };

    this.turnOff = function () {
        this.status = 'Off';
    };

    this.draw = function () {
        let img = document.getElementById('light' + this.status);
        ctx.drawImage(img, canvas.width / 2 - this.width / 2, canvas.height / 2 - this.height / 2, this.width, this.height);
    };
};

let switchButton = function (status) {
    this.status = status;

    this.turnOnOff =function (lamp) {
        let switchBtn = document.getElementById('switchBtn');
        if (this.status == 'on') {
            lamp.turnOn();
            switchBtn.innerHTML = 'Tắt';
            this.status = 'off';
        } else {
            lamp.turnOff();
            switchBtn.innerHTML = 'Bật';
            this.status = 'on';
        }
    }

};

let lamp =new ElectricLamp('Off', 70, 112);
let switchOnOff = new switchButton('on');

lamp.draw();

function onOff() {
    switchOnOff.turnOnOff(lamp);
    lamp.draw();
}