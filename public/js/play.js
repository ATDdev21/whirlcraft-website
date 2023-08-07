try {

    document.getElementById('play').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('audio').play();
      });

} catch (error) {
    console.log(error)
}