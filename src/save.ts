import { State } from "./state.js";


export class Save {

    loadSaveFile(state: State) {
        const json = JSON.stringify(state.pokedex)
        console.log(json);

    }

    saveToFile() {

    }

    loadOtherSaveFile(saveName: string) {

    }
}