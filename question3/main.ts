export class Connect4 {
  
  private board: number[][]; // El tablero del juego, representado por una matriz de números
  private rows: number; // El número de filas del tablero
  private cols: number; // El número de columnas del tablero
  private player: number; // El jugador actual, 1 o 2
  private winner: number; // El ganador del juego, 0 si no hay ganador

    constructor() {
      // Good luck
      this.rows = 6; // Asignar el número de filas
      this.cols = 7; // Asignar el número de columnas
      this.board = []; // Crear una matriz vacía para el tablero
      this.player = 1; // Asignar el primer jugador
      this.winner = 0; // Asignar el valor inicial del ganador
    // Llenar el tablero con ceros, indicando que las casillas están vacías
      for (let i = 0; i < this.rows; i++) {
        this.board[i] = [];
        for (let j = 0; j < this.cols; j++) {
          this.board[i][j] = 0;
        }
      }
    }

    play(col: number): string{
      // Good luck
       // Comprobar si la columna es válida
    if (col < 0 || col >= this.cols) {
      return "Invalid Column";
    }

    // Comprobar si el juego ha terminado
    if (this.winner !== 0) {
      return "Game has finished!";
    }

    // Buscar la primera fila vacía en la columna
    let row = -1;
    for (let i = this.rows - 1; i >= 0; i--) {
      if (this.board[i][col] === 0) {
        row = i;
        break;
      }
    }

    // Comprobar si la columna está llena
    if (row === -1) {
      return "Column full!";
    }

    // Colocar la ficha del jugador en la casilla vacía
    this.board[row][col] = this.player;

    // Comprobar si el jugador ha ganado con este movimiento
    if (this.checkWin(row, col)) {
      // Asignar el ganador
      this.winner = this.player;
      // Devolver el mensaje de victoria
      return `Player ${this.player} wins!`;
    }

    // Comprobar si el tablero está lleno
    if (this.checkFull()) {
      // Asignar el ganador como empate
      this.winner = -1;
      // Devolver el mensaje de empate
      return "Empate";
    }
    var message = `Player ${this.player} has a turn`;
    // Cambiar el turno del jugador
    this.player = this.player === 1 ? 2 : 1;

    // Devolver el mensaje de éxito
    return message;
    }
  

  // Definir un método para comprobar si el jugador ha ganado con el último movimiento
  checkWin(row: number, col: number): boolean {
    // Obtener el valor de la casilla donde se colocó la ficha
    let value = this.board[row][col];

    // Definir un contador para las fichas consecutivas
    let count = 0;

    // Comprobar la línea horizontal
    for (let j = 0; j < this.cols; j++) {
      // Si la casilla tiene el mismo valor que la ficha, incrementar el contador
      if (this.board[row][j] === value) {
        count++;
      } else {
        // Si no, reiniciar el contador
        count = 0;
      }
      // Si el contador llega a 4, el jugador ha ganado
      if (count === 4) {
        return true;
      }
    }

    // Reiniciar el contador
    count = 0;

    // Comprobar la línea vertical
    for (let i = 0; i < this.rows; i++) {
      // Si la casilla tiene el mismo valor que la ficha, incrementar el contador
      if (this.board[i][col] === value) {
        count++;
      } else {
        // Si no, reiniciar el contador
        count = 0;
      }
      // Si el contador llega a 4, el jugador ha ganado
      if (count === 4) {
        return true;
      }
    }

    // Reiniciar el contador
    count = 0;

    // Comprobar la diagonal ascendente
    // Calcular el índice de la esquina inferior izquierda de la diagonal
    let i = row + col;
    let j = 0;
    // Ajustar el índice si está fuera del tablero
    if (i >= this.rows) {
      i = this.rows - 1;
      j = col + row - i;
    }
    // Recorrer la diagonal de izquierda a derecha
    while (i >= 0 && j < this.cols) {
      // Si la casilla tiene el mismo valor que la ficha, incrementar el contador
      if (this.board[i][j] === value) {
        count++;
      } else {
        // Si no, reiniciar el contador
        count = 0;
      }
      // Si el contador llega a 4, el jugador ha ganado
      if (count === 4) {
        return true;
      }
      // Decrementar el índice de la fila e incrementar el de la columna
      i--;
      j++;
    }

    // Reiniciar el contador
    count = 0;

    // Comprobar la diagonal descendente
    // Calcular el índice de la esquina superior izquierda de la diagonal
    i = row - col;
    j = 0;
    // Ajustar el índice si está fuera del tablero
    if (i < 0) {
      i = 0;
      j = col - row;
    }
    // Recorrer la diagonal de izquierda a derecha
    while (i < this.rows && j < this.cols) {
      // Si la casilla tiene el mismo valor que la ficha, incrementar el contador
      if (this.board[i][j] === value) {
        count++;
      } else {
        // Si no, reiniciar el contador
        count = 0;
      }
      // Si el contador llega a 4, el jugador ha ganado
      if (count === 4) {
        return true;
      }
      // Incrementar el índice de la fila y el de la columna
      i++;
      j++;
    }

    // Si no se ha encontrado ninguna línea de 4 fichas, el jugador no ha ganado
    return false;
  }

  // Definir un método para comprobar si el tablero está lleno
  private checkFull(): boolean {
    // Recorrer el tablero
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        // Si hay alguna casilla vacía, el tablero no está lleno
        if (this.board[i][j] === 0) {
          return false;
        }
      }
    }
    // Si no hay ninguna casilla vacía, el tablero está lleno
    return true;
  }
}