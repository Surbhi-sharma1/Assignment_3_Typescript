import { UserCRUD } from "./userCrud.js";
class Main {
    constructor() {
        this.loadButton = document.querySelector(".loadButton");
        this.userCRUD = new UserCRUD();
        this.loadButton.addEventListener('click', () => this.load());
    }
    load() {
        if (this.loadButton.innerHTML == "Load Data") {
            this.userCRUD.create();
            this.loadButton.innerHTML = "Refresh Data";
        }
        else {
            this.userCRUD.refreshData();
        }
    }
}
new Main();
