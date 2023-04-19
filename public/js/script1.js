document.getElementById('toggleButton').addEventListener('click', function() {
    var content = document.getElementById('content1');
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });