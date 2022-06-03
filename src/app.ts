import { UserCRUD } from "./userCrud.js";
class Main {
    loadButton: HTMLButtonElement;
    userCRUD: UserCRUD;
    constructor() {
        this.loadButton = <HTMLButtonElement>document.querySelector(".loadButton")!;

        this.userCRUD = new UserCRUD();
        this.loadButton.addEventListener('click', () => this.load());
    }
    load() {
        if (this.loadButton.innerHTML == "Load Data") {
            this.userCRUD.create();
            this.loadButton.innerHTML = "Refresh Data";
        }
        else {
            this.userCRUD.refreshData()
        }
    }
}
new Main();