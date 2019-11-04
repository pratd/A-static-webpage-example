// Obtained from https://www.willmaster.com/
//
// Specify maximum number of history links to keep, 
//    minimum 1.
var MaximumNumberOfLinks = 10;

// Specify cookie name.
var CookieName = "HistoryLinks";

// Specify number of days cookie is to remain on visitor's 
//    computer. (Use 0 to delete cookie when browser closed.)
var DaysToLive = 0;

// No other customizations required.
var HistoryLink = new Array();
var HistoryTitle = new Array();
var CurrentPage = new String();
var HistoryContent = new String();
DaysToLive = parseInt(DaysToLive);
MaximumNumberOfLinks = parseInt(MaximumNumberOfLinks);
if( MaximumNumberOfLinks < 1 ) { MaximumNumberOfLinks = 10; }

function GetCookie() {
var cookiecontent = '';
if(document.cookie.length > 0) {
   var cookiename = CookieName + '=';
   var cookiebegin = document.cookie.indexOf(cookiename);
   if(cookiebegin > -1) {
      cookiebegin += cookiename.length;
      var cookieend = document.cookie.indexOf(";",cookiebegin);
      if(cookieend < cookiebegin) { cookieend = document.cookie.length; }
      cookiecontent = document.cookie.substr(cookiebegin,cookieend);
      }
   }
if( cookiecontent.length < 3 ) { return; }
cookiecontent = unescape(cookiecontent);
var historyList = cookiecontent.split('&');
for( var i = 0; i < historyList.length; i++ ) {
   var link = historyList[i].split('=',2);
   HistoryLink.push(link[0]);
   HistoryTitle.push(link[1]);
   var temparray = link[0].split('~amp;');
   link[0] = temparray.join('&');
   temparray = link[1].split('~amp;');
   link[1] = temparray.join('&');
   HistoryContent += '<'+'p>'+'<'+'a href="'+link[0]+'">'+link[1]+'<'+'/'+'a>'+'<'+'/'+'p>';
   }
}

function PutCookie() {
if( HistoryLink.length < 1 ) { return; }
var len = HistoryLink.length;
while( HistoryLink.length > MaximumNumberOfLinks ) {
   HistoryTitle.shift();
   HistoryLink.shift();
   }
var pairs = new Array();
for( var i = 0; i < HistoryLink.length; i++ ) { pairs.push(HistoryLink[i]+'='+HistoryTitle[i]); }
var value = pairs.join('&');
var exp = new String();
if(DaysToLive > 0) {
   var now = new Date();
   now.setTime( now.getTime() + (DaysToLive * 24 * 60 * 60 * 1000) );
   exp = '; expires=' + now.toGMTString();
   }
document.cookie = CookieName + "=" + escape(value) + '; path=/' + exp;
}

function RecordCurrentPage() {
var link = document.URL;
var title = document.title.length > 1 ? document.title : 'Untitled';
CurrentPage = '<'+'p>'+title+'<'+'/'+'p>';
var temparray = link.split('&');
link = temparray.join('~amp;');
var temparray = title.split('&');
title = temparray.join('~amp;');
HistoryLink.push(link);
HistoryTitle.push(title);
}

GetCookie();
RecordCurrentPage();
PutCookie();
//-->

