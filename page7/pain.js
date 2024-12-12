document.querySelector('button').onclick = myclick;

function myclick()
{
    const getName = document.getElementById("getName");
    const name = getName.value;

    if (name.trim()=== "")
    {
        alert('Вы ничего не написали!');
        return;
    }
    
    alert('Вы прокляли душу человека по имени: '+ name + '!!!');
}

