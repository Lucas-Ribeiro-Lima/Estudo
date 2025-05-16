type StatesT = "idle" | "running" | "jumping" | "attacking" | "casting"

export class Automato {
  private _currentState = "idle"
  private _mana = 30

  private _transitions: Record<StatesT, Record<string, StatesT>> = {
    idle: { start: "running", cast: "casting", attack: "attacking" },
    running: { jump: "jumping", stop: "idle" },
    jumping: { land: "idle" },
    casting: { finish: "idle" },
    attacking: { finish: "idle" }
  }

  constructor() {}

  private _fail() {
    console.log("Ação inválida. Transição falhou!")
    this._currentState = "finished"
  }

  delta(action: string): string | void {
    const availableTransitions = this._transitions[this._currentState]
    const nextState = availableTransitions?.[action]

    if (!nextState) {
      this._fail()
      return
    }

    // Verificação de mana antes de transitar para "casting"
    if (action === "cast" && this._mana < 20) {
      console.log("Mana insuficiente para lançar magia")
      return
    }

    if (action === "cast") {
      this._mana -= 20
      console.log("Magia lançada! Mana restante:", this._mana)
    }

    this._currentState = nextState
  }

  get currentState() {
    return this._currentState
  }

  get mana() {
    return this._mana
  }
}
