function showText(itemId) {
    const textElement = document.getElementById(itemId);
    const menuItem = textElement.parentNode;
    const menuImg = textElement.previousElementSibling;

    menuItem.style.transform = 'scale(1.1)';
    menuImg.style.filter = 'blur(1px)';
    menuImg.style.filter = 'brightness(50%)';
    menuImg.style.transition = 'all 0.3s ease';
    menuItem.style.transition = 'all 0.3s ease';
    textElement.style.display = 'block';
}

function hideText(itemId) {
    const textElement = document.getElementById(itemId);
    const menuItem = textElement.parentNode;
    const menuImg = textElement.previousElementSibling;
    
    menuItem.style.transform = 'scale(1)';
    menuImg.style.filter = 'blur(0)';
    menuImg.style.filter = 'brightness(100%)';
    textElement.style.display = 'none';
}