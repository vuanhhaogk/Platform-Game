var menuState = {
    preload: function () {
    },
    create: function () {
        game.add.sprite(0, 0, 'intro');
        game.add.button(game.camera.width - 180, game.camera.height - 240, 'button', this.newGame, this);
        game.add.text(game.camera.width - 105, game.camera.height - 220, 'New game', { font: '20px monospace', fill: '#ffffff' }).anchor.setTo(.5);
        game.add.button(game.camera.width - 200, game.camera.height - 180, 'button', this["continue"], this);
        game.add.text(game.camera.width - 125, game.camera.height - 160, 'Continue', { font: '20px monospace', fill: '#ffffff' }).anchor.setTo(.5);
        game.add.button(game.camera.width - 220, game.camera.height - 120, 'button', this.help, this);
        game.add.text(game.camera.width - 145, game.camera.height - 100, 'Help', { font: '20px monospace', fill: '#ffffff' }).anchor.setTo(.5);
        game.add.button(game.camera.width - 240, game.camera.height - 60, 'button', this.rank, this);
        game.add.text(game.camera.width - 165, game.camera.height - 40, 'Rank', { font: '20px monospace', fill: '#ffffff' }).anchor.setTo(.5);
    },
    newGame: function () {
        game.global.level = 0;
        game.state.start('game');
    },
    "continue": function () {
        game.global.level = parseInt(localStorage.getItem('platform-last-level') || '0');
        game.state.start('game');
    },
    help: function () {
    },
    rank: function () {
    }
};
