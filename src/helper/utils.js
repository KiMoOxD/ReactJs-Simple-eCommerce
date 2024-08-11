

export function handleSearchClick({isCartOpen, toggleCart}, {isWishListOpen, toggleWishListMenu}, {isMenuOpen, toggleMenu}, SearchFn) {
    if (isCartOpen) toggleCart();
    if (isMenuOpen) toggleMenu();
    if (isWishListOpen) toggleWishListMenu();
    SearchFn(prev => !prev)
}

export function DateFormater(date) {
    let mydate = new Date(date);
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][mydate.getMonth()];
    return month + " " + mydate.getFullYear();
  }