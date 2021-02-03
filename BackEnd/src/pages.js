function pageLogin(req, res){
    return res.render("index.html")
}

function pageMenu(req, res){
    return res.render("page-menu.html")
}

module.exports = {
    pageLogin,
    pageMenu
}