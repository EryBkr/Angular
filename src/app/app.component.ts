import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //default olarak X verdik
  mark: string = 'X';
  //Bu arkadaşta UI tarafta sıranın kime ait olduğunu belirtecek
  message: string = 'Sırada ki mark X';

  //tahtanın oluşabilmesi için oluşturdum,winner property'si kazanma durumuna göre tahtayı yeşile boyayabilmek için oluşturduğum bir şey
  games: { mark: string; winner: boolean }[] = [
    { mark: '', winner: false },
    { mark: '', winner: false },
    { mark: '', winner: false },
    { mark: '', winner: false },
    { mark: '', winner: false },
    { mark: '', winner: false },
    { mark: '', winner: false },
    { mark: '', winner: false },
    { mark: '', winner: false },
  ];

  //Bizim için oyun historisini tutacak
  moves: any = [];

  //Oyun bitti mi?
  gameOver: boolean = false;

  //Beraberlik ?
  isMoveFinish: boolean = false;

  //kutucuğa işaret koymak için
  setMark(index: number) {
    //alan işaretli değilse ve oyun bitmediyse setMark işlemi yapılabilsin
    if (this.games[index].mark == '' && !this.gameOver) {
      this.games[index].mark = this.mark;
      //Games içerisinde değeleri sepereate ile value biçimde alıyorum,çünkü games referans tür olduğu için sürekli güncel halini barındıracak fakat biz önceki hallerini de istiyoruz
      this.moves.push([...this.games]);

      //Her işaretleme işleminden sonra oyunun bitip bitmediğini kontrol ediyorum
      this.isGameOver();

      //Beraberlik kontrolü
      this.checkGameIsOver();

      //Oyun bitti ise kazananı message'ye yazıdırıyoruz diğer türlü oyun devam ediyor (ya da beraberlik)
      if (this.gameOver) this.message = 'Oyun bitti kazanan ' + this.mark;
      else if (this.isMoveFinish) this.message = 'Oyun berabere';
      else {
        //En son hangi işaret koyulmuşsa sonra ki tur tam tersi koyulsun
        if (this.mark == 'X') this.mark = 'O';
        else this.mark = 'X';

        //Sıradaki mark'ın kime ait olacağının mesajını oluşturuyoruz
        this.message = `Sırada ki mark ${this.mark}`;
      }
    } else
      alert(this.gameOver ? 'Oyun Bitti' : 'Lütfen işaretsiz alan seçiniz');
  }

  //Yeni Oyun butonuna basılırsa
  newGame() {
    //Bütün değeleri resetliyorum
    this.mark = 'X';
    this.message = 'Sırada ki mark X';
    this.games = [
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
    ];
    this.gameOver = false;
    this.moves = [];
    this.isMoveFinish = false;
  }

  returnSelectMove(index: number) {
    //Moves içerisinde games array'lerini barındırıyor (...value olarak aldığımız için referans bağımlılığı yok o an ki değeri neyse array'in onu aldık)
    //Bu sayede herhangi bir games array'i anına dönebiliyoruz moves=[games,games] gibi bir yapı aslında
    //games array'ine herhangi bir andaki moves değerini atıyoruz
    this.games = this.moves[index];
  }

  //Oyunun bitip bitmediğini kontrol edip kazananı belirliyoruz
  isGameOver() {
    if (
      this.games[0].mark != '' &&
      this.games[0].mark === this.games[1].mark &&
      this.games[1].mark === this.games[2].mark
    ) {
      this.gameOver = true;
      //Tahta ta işaretli alanları yeşile boyayabilmek için kazanan indexlere winner değerini veriyorum
      this.games[0].winner = true;
      this.games[1].winner = true;
      this.games[2].winner = true;
    }

    if (
      this.games[3].mark != '' &&
      this.games[3].mark === this.games[4].mark &&
      this.games[4].mark === this.games[5].mark
    ) {
      this.gameOver = true;
      //Tahta ta işaretli alanları yeşile boyayabilmek için kazanan indexlere winner değerini veriyorum
      this.games[3].winner = true;
      this.games[4].winner = true;
      this.games[5].winner = true;
    }

    if (
      this.games[6].mark != '' &&
      this.games[6].mark === this.games[7].mark &&
      this.games[7].mark === this.games[8].mark
    ) {
      this.gameOver = true;
      //Tahta ta işaretli alanları yeşile boyayabilmek için kazanan indexlere winner değerini veriyorum
      this.games[6].winner = true;
      this.games[7].winner = true;
      this.games[8].winner = true;
    }

    if (
      this.games[0].mark != '' &&
      this.games[0].mark === this.games[3].mark &&
      this.games[3].mark === this.games[6].mark
    ) {
      this.gameOver = true;
      //Tahta ta işaretli alanları yeşile boyayabilmek için kazanan indexlere winner değerini veriyorum
      this.games[0].winner = true;
      this.games[3].winner = true;
      this.games[6].winner = true;
    }

    if (
      this.games[1].mark != '' &&
      this.games[1].mark === this.games[4].mark &&
      this.games[4].mark === this.games[7].mark
    ) {
      this.gameOver = true;
      //Tahta ta işaretli alanları yeşile boyayabilmek için kazanan indexlere winner değerini veriyorum
      this.games[1].winner = true;
      this.games[4].winner = true;
      this.games[7].winner = true;
    }

    if (
      this.games[2].mark != '' &&
      this.games[2].mark === this.games[5].mark &&
      this.games[5].mark === this.games[8].mark
    ) {
      this.gameOver = true;
      //Tahta ta işaretli alanları yeşile boyayabilmek için kazanan indexlere winner değerini veriyorum
      this.games[2].winner = true;
      this.games[5].winner = true;
      this.games[8].winner = true;
    }

    if (
      this.games[0].mark != '' &&
      this.games[0].mark === this.games[4].mark &&
      this.games[4].mark === this.games[8].mark
    ) {
      this.gameOver = true;
      //Tahta ta işaretli alanları yeşile boyayabilmek için kazanan indexlere winner değerini veriyorum
      this.games[0].winner = true;
      this.games[4].winner = true;
      this.games[8].winner = true;
    }

    if (
      this.games[2].mark != '' &&
      this.games[2].mark === this.games[4].mark &&
      this.games[4].mark === this.games[6].mark
    ) {
      this.gameOver = true;
      //Tahta ta işaretli alanları yeşile boyayabilmek için kazanan indexlere winner değerini veriyorum
      this.games[2].winner = true;
      this.games[4].winner = true;
      this.games[6].winner = true;
    }
  }

  changeWinnerButtonClass(winner: boolean): string {
    if (winner) {
      return 'btn-success';
    } else return 'btn-warning ';
  }

  //Berberlik durumunu kontrol edicek
  checkGameIsOver() {
    for (let index = 0; index < this.games.length; index++) {
      if (this.games[index].mark == '') this.isMoveFinish = false;
      else {
        this.isMoveFinish = true;
      }
    }
  }
}
