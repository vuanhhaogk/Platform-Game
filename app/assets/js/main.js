var game = new Phaser.Game();
var bootState = {
    preload: function () {
        game.load.image('background', 'assets/images/background.png');
    },
    create: function () {
        game.state.start('loader');
    }
};
game.state.add('boot', bootState);
game.state.add('loader', loaderState);
game.state.add('game', gameState);
window.onload = function () {
    game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.state.start('boot');
};
