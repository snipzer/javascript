function Explosion()
{
    this.bindEvent();
}



Explosion.prototype.createExplosion = function ()
{
    var explosion = document.createElement("div");
    var field = document.querySelector(".conteneur");

    explosion.className = "explosion";
    explosion.style.top = Math.floor((Math.random() * 800));
    explosion.style.left = Math.floor((Math.random() * 800));
    explosion.style.right = 800 - explosion.style.left;
    explosion.style.bottom = 800 - explosion.style.bottom;
    explosion.style.width = Math.floor((Math.random() * 100) + 50);
    explosion.style.height = Math.floor((Math.random() * 100) + 50);

    field.appendChild(explosion);
};


Explosion.prototype.bindEvent = function ()
{
    document.querySelector("#explosion").onclick = Explosion.prototype.createExplosion;
};

Explosion.prototype.deleteSquare = function ()
{
    document.querySelector(".conteneur").removeChild(document.querySelector(".explosion"));
    this.createExplosion();
};
