function Explosion()
{
    this.bindEvent();
}



Explosion.prototype.createExplosion = function ()
{
    var explosion = document.createElement("div");
    var field = document.querySelector(".conteneur");

    console.log(explosion.style.top);

    explosion.className = "explosion";
    explosion.style.top = Math.floor((Math.random() * 800))+"px";
    explosion.style.left = Math.floor((Math.random() * 800))+"px";
    explosion.style.width = (Math.floor((Math.random() * 100) + 50))+"px";
    explosion.style.height = (Math.floor((Math.random() * 100) + 50))+"px";

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
