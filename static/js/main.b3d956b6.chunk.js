(this.webpackJsonpvinylstream=this.webpackJsonpvinylstream||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/Spotify-Logo.abbff554.png"},13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(11),l=a.n(i),c=(a(18),a(9),a(2)),o=a(3),r=a(4),m=a(1),h=a(6),u=a(5),p=a(7),y=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.loc.size,t=this.props.loc.right,a=this.props.loc.top,s={zIndex:"-1",position:"fixed",backgroundColor:"#fee5cc",border:"1px solid black",borderRadius:"50%",width:e/40+"vmin",height:e/40+"vmin",right:"calc("+t+"vw - "+e/80+"vmin)",top:"calc("+a+"vh - "+e/80+"vmin)"},i={zIndex:"-2",width:e/2+"vmin",right:"calc("+t+"vw - "+e/4+"vmin)",top:"calc("+a+"vh - "+e/4+"vmin)",position:"fixed",borderRadius:"50%",animation:"rotate 20s forwards",animationTimingFunction:"linear",animationIterationCount:"infinite",animationPlayState:this.props.playing},l={zIndex:"-3",width:e/2+"vmin",height:e/2+"vmin",backgroundColor:"black",right:"calc("+t+"vw - "+e/4+"vmin)",top:"calc("+a+"vh - "+e/4+"vmin)",position:"fixed",borderRadius:"50%"},c={zIndex:"-4",width:e+"vmin",height:e+"vmin",right:"calc("+t+"vw - "+e/2+"vmin)",top:"calc("+a+"vh - "+e/2+"vmin)",position:"fixed",borderRadius:"50%",animation:"rotate 20s forwards",animationTimingFunction:"linear",animationIterationCount:"infinite",animationPlayState:this.props.playing};return n.a.createElement("div",null,n.a.createElement("img",{style:c,src:"https://americanvinylco.com/wp-content/uploads/2017/06/LabelsBlank-1024x1024.png"}),n.a.createElement("div",{style:l}),n.a.createElement("img",{src:this.props.src,style:i}),n.a.createElement("div",{style:s}))}}]),a}(n.a.Component),d=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={input:"",display:!0},s.handleChange=s.handleChange.bind(Object(m.a)(s)),s.selectSong=s.selectSong.bind(Object(m.a)(s)),s.exitSearch=s.exitSearch.bind(Object(m.a)(s)),s}return Object(r.a)(a,[{key:"selectSong",value:function(e){this.props.selection(e),this.exitSearch()}},{key:"handleChange",value:function(e){this.setState({input:e.target.value}),this.props.value(this.state.input)}},{key:"exitSearch",value:function(){this.props.exit(!0)}},{key:"render",value:function(){var e=this;return this.props.enabled?n.a.createElement("div",null,n.a.createElement("div",{className:"dimBackground"}),n.a.createElement("button",{onClick:this.exitSearch,className:"material-icons exitSearch",style:{webkitTextStroke:"1px black"}},"clear"),n.a.createElement("div",{className:"row searchCard"},n.a.createElement("input",{className:"form-control searchBar",type:"text",value:this.state.input,onChange:this.handleChange}),n.a.createElement("div",{className:"list-group searchList",style:{border:this.props.results.length>0?"2px solid black":"none"}},this.props.results.map((function(t){if(void 0!=t)return n.a.createElement("button",{key:t,onClick:function(){return e.selectSong(t)},className:"list-group-item list-group-action"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2 px-0"}," ",n.a.createElement("img",{className:"searchThumbnail",src:t.album.images[0].url})),n.a.createElement("div",{className:"col text-truncate text-left"},n.a.createElement("p",{className:"searchResult"},t.name))))}))))):n.a.createElement("div",null)}}]),a}(n.a.Component),v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).close=s.close.bind(Object(m.a)(s)),s.changeColor=s.changeColor.bind(Object(m.a)(s)),s.changeTextColor=s.changeTextColor.bind(Object(m.a)(s)),s}return Object(r.a)(a,[{key:"close",value:function(){this.props.close(!0)}},{key:"changeColor",value:function(){this.props.changeColor(!0)}},{key:"changeTextColor",value:function(){this.props.changeTextColor(!0)}},{key:"render",value:function(){var e=this.props.open;return n.a.createElement("div",null,n.a.createElement("div",{className:"dimBackground",style:{visibility:this.props.open?"visible":"hidden"}}),n.a.createElement("div",{className:"container settingsMenu",style:{animation:e?"slideIn 0.5s forwards":"slideOut 0.5s forwards"}},n.a.createElement("div",{className:"row py-2 px-2 justify-content-end"},n.a.createElement("button",{onClick:this.close},n.a.createElement("i",{style:{fontSize:"5vmin"},className:"material-icons"},"clear"))),n.a.createElement("div",{className:"col px-1 align-content-center"},n.a.createElement("button",{className:"settingsButton",style:{backgroundImage:this.props.color,color:this.props.accentColor},onClick:this.changeColor},"Background Color"),n.a.createElement("button",{className:"settingsButton",style:{backgroundImage:this.props.color,color:this.props.accentColor},onClick:this.changeTextColor},"Accent Color"))))}}]),a}(n.a.Component),g=a(12),b=a.n(g),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).startPlaylist=s.startPlaylist.bind(Object(m.a)(s)),s.exitPlaylistView=s.exitPlaylistView.bind(Object(m.a)(s)),s}return Object(r.a)(a,[{key:"startPlaylist",value:function(e){console.log(e.name),this.props.startPlaylist(e),this.props.exit(!0)}},{key:"exitPlaylistView",value:function(){this.props.exit(!0)}},{key:"render",value:function(){var e=this;return this.props.enabled?n.a.createElement("div",null,n.a.createElement("button",{onClick:this.exitPlaylistView,className:"material-icons exitSearch",style:{webkitTextStroke:"1px black"}},"clear"),n.a.createElement("div",{className:"dimBackground"}),n.a.createElement("div",{className:"container playlistBlock",style:{width:this.props.width,left:this.props.left}},n.a.createElement("h1",{className:"playlistHeader"},"Playlists"),n.a.createElement("div",{className:"list-group playlistMenu"},this.props.playlists.map((function(t,a){return n.a.createElement("div",{className:"row list-group-item",style:{fontFamily:"Roboto",fontSize:"5vmin"}},n.a.createElement("button",{style:{width:"100%",textAlign:"left"},onClick:function(){return e.startPlaylist(t)}},t.name))}))))):n.a.createElement("div",null)}}]),a}(n.a.Component),k=new(a(21)),E=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e,s;Object(o.a)(this,a);var n=(s=t.call(this)).getAccessToken();return console.log(n),n&&k.setAccessToken(n),s.state=(e={loggedIn:!!n,nowPlaying:{name:"Play a track on Spotify",album:"N/A",artist:"N/A",albumArt:b.a},is_playing:!1,playPause:"play_arrow",shuffle_state:!1,repeat_state:"off",skipUpdate:!1,search:!1},Object(c.a)(e,"search",!1),Object(c.a)(e,"searchList",[]),Object(c.a)(e,"userPlaylists",[]),Object(c.a)(e,"playlistView",!1),Object(c.a)(e,"colors",["linear-gradient(rgba(255, 187, 170, 1), rgba(254, 255, 225, 1))","linear-gradient(180deg, rgba(170,240,255,1) 0%, rgba(238,226,131,1) 100%)","linear-gradient(180deg, rgba(191, 170, 255, 1) 0%, rgba(49, 221, 147, 1) 100%)","linear-gradient(0deg, rgba(246,137,59,1) 0%, rgba(255,239,50,1) 100%)","linear-gradient(0deg, rgba(48,132,255,1) 0%, rgba(36,39,74,1) 100%)","linear-gradient(0deg, rgba(255,48,62,1) 0%, rgba(51,17,1,1) 100%)"]),Object(c.a)(e,"accentColors",["#bd2f00","#1f5e63","#01570f","#c70905","#dbe6ff","#f6d8ca"]),Object(c.a)(e,"accentColor","black"),Object(c.a)(e,"colorIndex",0),Object(c.a)(e,"background_color","linear-gradient(rgba(255, 187, 170, 1), rgba(254, 255, 225, 1))"),Object(c.a)(e,"settingsOpen",!1),e),s.getNowPlaying(),s.recalibrate(),s.getPlaylists(),s.skipToNext=s.skipToNext.bind(Object(m.a)(s)),s.skipToPrevious=s.skipToPrevious.bind(Object(m.a)(s)),s.setPlayState=s.setPlayState.bind(Object(m.a)(s)),s.setRepeat=s.setRepeat.bind(Object(m.a)(s)),s.setShuffle=s.setShuffle.bind(Object(m.a)(s)),s.openSettings=s.openSettings.bind(Object(m.a)(s)),s.closeSettings=s.closeSettings.bind(Object(m.a)(s)),s.search=s.search.bind(Object(m.a)(s)),s.playSong=s.playSong.bind(Object(m.a)(s)),s.openSearch=s.openSearch.bind(Object(m.a)(s)),s.exitSearch=s.exitSearch.bind(Object(m.a)(s)),s.getPlaylists=s.getPlaylists.bind(Object(m.a)(s)),s.startPlaylist=s.startPlaylist.bind(Object(m.a)(s)),s.openPlaylistView=s.openPlaylistView.bind(Object(m.a)(s)),s.exitPlaylistView=s.exitPlaylistView.bind(Object(m.a)(s)),s.changeColor=s.changeColor.bind(Object(m.a)(s)),s.changeTextColor=s.changeTextColor.bind(Object(m.a)(s)),s.handleKeyPress=s.handleKeyPress.bind(Object(m.a)(s)),document.addEventListener("keydown",s.handleKeyPress),s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.getNowPlaying(),e.recalibrate()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"getHashParams",value:function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,s=window.location.hash.substring(1);for(e=a.exec(s);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(s);return t}},{key:"getAccessToken",value:function(){var e=window.location;return new URLSearchParams(e.search).get("access_token")}},{key:"handleKeyPress",value:function(e){if(!e.repeat)switch(e.code){case"Space":this.setPlayState()}}},{key:"openSettings",value:function(){this.setState({settingsOpen:!0})}},{key:"closeSettings",value:function(){this.setState({settingsOpen:!1})}},{key:"changeColor",value:function(){console.log("color");var e=(this.state.colorIndex+1)%this.state.colors.length;this.setState({colorIndex:e,background_color:this.state.colors[e],accentColor:"white"==this.state.accentColor?"white":"black"==this.state.accentColor?"black":this.state.accentColors[e]})}},{key:"changeTextColor",value:function(){this.setState({accentColor:"black"===this.state.accentColor?"white":"white"===this.state.accentColor?this.state.accentColors[this.state.colorIndex]:"black"})}},{key:"getPlaylists",value:function(){var e=this;k.getUserPlaylists().then((function(t){for(var a=[],s=0;s<t.items.length;s++)a.push(t.items[s]);e.setState({userPlaylists:a})}))}},{key:"startPlaylist",value:function(e){var t={context_uri:e.uri};k.play(t)}},{key:"openPlaylistView",value:function(){this.setState({playlistView:!0})}},{key:"exitPlaylistView",value:function(){this.setState({playlistView:!1})}},{key:"search",value:function(e){var t=this;console.log(e),void 0!=e&&k.search(e,["track"]).then((function(e){console.log(e);for(var a=[],s=0;s<10;s++){var n=e.tracks.items[s];a.push(n)}t.setState({searchList:a})}))}},{key:"openSearch",value:function(){this.setState({search:!0})}},{key:"exitSearch",value:function(){this.setState({search:!1})}},{key:"playSong",value:function(e){var t={uris:[e.uri]};console.log(e.uri),k.play(t)}},{key:"skipToPrevious",value:function(){k.skipToPrevious(),this.recalibrate()}},{key:"skipToNext",value:function(){k.skipToNext(),console.log("next"),this.recalibrate()}},{key:"setPlayState",value:function(){this.state.is_playing?(k.pause(),this.setState({is_playing:"false",playPause:"play_arrow",skipUpdate:!0})):(k.play(),this.setState({is_playing:"true",playPause:"pause",skipUpdate:!0}))}},{key:"setShuffle",value:function(){k.setShuffle(!this.state.shuffle_state),this.setState({shuffle_state:!this.state.shuffle_state,skipUpdate:!0})}},{key:"setRepeat",value:function(){var e=this.state.repeat_state,t="";t="off"==e?"context":"context"==e?"track":"off",k.setRepeat(t),this.setState({repeat_state:t,skipUpdate:!0})}},{key:"getNowPlaying",value:function(){var e=this;k.getMyCurrentPlaybackState().then((function(t){void 0!=t&&void 0!=t.item&&e.setState({nowPlaying:{name:t.item.name,album:t.item.album.name,artist:t.item.artists[0].name,albumArt:t.item.album.images[0].url}})}))}},{key:"recalibrate",value:function(){var e=this;this.state.skipUpdate?this.setState({skipUpdate:!1}):k.getMyCurrentPlaybackState().then((function(t){void 0!=t&&e.setState({shuffle_state:t.shuffle_state,repeat_state:t.repeat_state,is_playing:t.is_playing,playPause:t.is_playing?"pause":"play_arrow"})}))}},{key:"render",value:function(){var e=this.state.nowPlaying.name,t=this.state.nowPlaying.album,a=this.state.nowPlaying.artist,s=this.state.nowPlaying.albumArt;return window.innerHeight/window.innerWidth<=.7?n.a.createElement("div",{className:"background",style:{backgroundImage:this.state.colors[this.state.colorIndex]}},n.a.createElement(d,{exit:this.exitSearch,enabled:this.state.search,selection:this.playSong,results:this.state.searchList,value:this.search}),n.a.createElement(v,{open:this.state.settingsOpen,close:this.closeSettings,color:this.state.background_color,accentColor:this.state.accentColor,changeColor:this.changeColor,changeTextColor:this.changeTextColor}),n.a.createElement(f,{exit:this.exitPlaylistView,enabled:this.state.playlistView,playlists:this.state.userPlaylists,startPlaylist:this.startPlaylist,width:"60vw",left:"20vw"}),n.a.createElement("div",{id:"topBar",className:"container-fluid px-sm-0"},n.a.createElement("div",{className:"row justify-content-between",style:{marginTop:"2vmin"}},n.a.createElement("div",{className:"col-auto mx-3"},n.a.createElement("a",{className:"VinylStream",href:"https://danielpmarks.github.io/vinyl-stream/"},n.a.createElement("h1",{className:"VinylStream",style:{color:this.state.accentColor}},"Vinyl Stream"))),n.a.createElement("div",{className:"col-auto mx-5"},n.a.createElement("div",{className:"row justify-content-end"},n.a.createElement("button",{onClick:this.openSearch,className:"playbackButtons"},n.a.createElement("i",{className:"material-icons",style:{fontSize:"5vmin",color:this.state.accentColor}},"search")),n.a.createElement("button",{onClick:this.openPlaylistView,className:"playbackButtons"},n.a.createElement("i",{className:"material-icons",style:{fontSize:"5vmin",color:this.state.accentColor}},"playlist_play")),n.a.createElement("button",{onClick:this.openSettings,className:"playbackButtons"},n.a.createElement("i",{className:"material-icons",style:{fontSize:"5vmin",color:this.state.accentColor}}," settings"))))),n.a.createElement("hr",{style:{marginTop:"0vmin",border:"2px solid "+this.state.accentColor}})),n.a.createElement("div",{style:{height:"90%"},className:"container-fluid"},n.a.createElement("div",{style:{height:"100%"},className:"col-5 mx-3"},n.a.createElement("div",{className:"row align-items-center",style:{height:"100%"}},n.a.createElement("div",{className:"container",style:{display:"block",color:this.state.accentColor}},n.a.createElement("div",{className:"row align-items-end justify-content-center",style:{height:"20vh"}},n.a.createElement(p.a,{lines:2,className:"playerInfo",style:{fontSize:"9vmin",fontWeight:"bold",paddingBottom:"1vmin"}},e)),n.a.createElement("div",{className:"row justify-content-center py-4"},n.a.createElement(p.a,{lines:1,className:"playerInfo",style:{fontSize:"6vmin",paddingBottom:"1vmin"}},t)),n.a.createElement("div",{className:"row justify-content-center py-2"},n.a.createElement(p.a,{lines:1,className:"playerInfo",style:{fontSize:"4vmin",paddingBottom:"1vmin"}},a)),n.a.createElement("div",{className:"row justify-content-center",style:{marginTop:"2vh"}},n.a.createElement("button",{className:"playbackButtons",onClick:this.setShuffle},n.a.createElement("i",{style:{fontSize:"6vmin",color:this.state.shuffle_state?"#1DB954":this.state.accentColor},className:"material-icons queueButtons"},"shuffle")),n.a.createElement("div",{className:"row",style:{marginLeft:"3vmin",marginRight:"3vmin"}},n.a.createElement("button",{className:"playbackButtons",onClick:this.skipToPrevious},n.a.createElement("i",{style:{fontSize:"10vmin",color:this.state.accentColor},className:"material-icons"},"skip_previous")),n.a.createElement("button",{className:"playbackButtons",onClick:this.setPlayState},n.a.createElement("i",{style:{fontSize:"10vmin",color:this.state.accentColor},className:"material-icons"},this.state.playPause)),n.a.createElement("button",{className:"playbackButtons",onClick:this.skipToNext},n.a.createElement("i",{style:{fontSize:"10vmin",color:this.state.accentColor},className:"material-icons"},"skip_next"))),n.a.createElement("button",{className:"playbackButtons",onClick:this.setRepeat},n.a.createElement("i",{style:{fontSize:"6vmin",color:"off"!=this.state.repeat_state?"#1DB954":this.state.accentColor},className:"material-icons queueButtons"},"track"==this.state.repeat_state?"repeat_one":"repeat")))))),n.a.createElement("div",{className:"col-6 align-self-center"},n.a.createElement(y,{loc:{size:80,right:30,top:55},playing:this.state.is_playing?"running":"paused",src:s})))):window.innerHeight/window.innerWidth<=1.4?n.a.createElement("div",{className:"background",style:{backgroundImage:this.state.colors[this.state.colorIndex]}},n.a.createElement(d,{exit:this.exitSearch,enabled:this.state.search,selection:this.playSong,results:this.state.searchList,value:this.search}),n.a.createElement(v,{open:this.state.settingsOpen,close:this.closeSettings,color:this.state.background_color,accentColor:this.state.accentColor,changeColor:this.changeColor,changeTextColor:this.changeTextColor}),n.a.createElement(f,{exit:this.exitPlaylistView,enabled:this.state.playlistView,playlists:this.state.userPlaylists,startPlaylist:this.startPlaylist,width:"70vw",left:"15vw"}),n.a.createElement("div",{id:"topBar",className:"container-fluid px-sm-0"},n.a.createElement("div",{className:"row justify-content-between",style:{marginTop:"2vmin"}},n.a.createElement("div",{className:"col-auto mx-3"},n.a.createElement("a",{className:"VinylStream",href:"https://danielpmarks.github.io/vinyl-stream/"},n.a.createElement("h1",{className:"VinylStream",style:{color:this.state.accentColor}},"Vinyl Stream"))),n.a.createElement("div",{className:"col-auto mx-5"},n.a.createElement("div",{className:"row justify-content-end"},n.a.createElement("button",{onClick:this.openSearch,className:"playbackButtons"},n.a.createElement("i",{className:"material-icons",style:{fontSize:"5vmin",color:this.state.accentColor}},"search")),n.a.createElement("button",{onClick:this.openPlaylistView,className:"playbackButtons"},n.a.createElement("i",{className:"material-icons",style:{fontSize:"5vmin",color:this.state.accentColor}},"playlist_play")),n.a.createElement("button",{onClick:this.openSettings,className:"playbackButtons"},n.a.createElement("i",{className:"material-icons",style:{fontSize:"5vmin",color:this.state.accentColor}}," settings"))))),n.a.createElement("hr",{style:{marginTop:"0vmin",border:"2px solid "+this.state.accentColor}})),n.a.createElement("div",{style:{height:"90%"},className:"container-fluid"},n.a.createElement("div",{style:{height:"100%"},className:"col-6 "},n.a.createElement("div",{className:"row align-items-center",style:{height:"100%"}},n.a.createElement("div",{className:"container",style:{display:"block",color:this.state.accentColor}},n.a.createElement("div",{className:"row justify-content-center py-3"},n.a.createElement(p.a,{lines:2,className:"playerInfo",style:{fontSize:"7vmin",fontWeight:"bold"}},e)),n.a.createElement("div",{className:"row justify-content-center py-4"},n.a.createElement(p.a,{lines:1,className:"playerInfo",style:{fontSize:"5vmin"}},t)),n.a.createElement("div",{className:"row justify-content-center py-2"},n.a.createElement(p.a,{lines:1,className:"playerInfo",style:{fontSize:"4vmin"}},a)),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("button",{className:"playbackButtons",onClick:this.setShuffle},n.a.createElement("i",{style:{fontSize:"3vmin",color:this.state.shuffle_state?"#1DB954":this.state.accentColor},className:"material-icons queueButtons"},"shuffle")),n.a.createElement("div",{className:"row",style:{marginLeft:"2vw",marginRight:"2vw"}},n.a.createElement("button",{className:"playbackButtons",onClick:this.skipToPrevious},n.a.createElement("i",{style:{fontSize:"6vmin",color:this.state.accentColor},className:"material-icons"},"skip_previous")),n.a.createElement("button",{className:"playbackButtons",onClick:this.setPlayState},n.a.createElement("i",{style:{fontSize:"6vmin",color:this.state.accentColor},className:"material-icons"},this.state.playPause)),n.a.createElement("button",{className:"playbackButtons",onClick:this.skipToNext},n.a.createElement("i",{style:{fontSize:"6vmin",color:this.state.accentColor},className:"material-icons"},"skip_next"))),n.a.createElement("button",{className:"playbackButtons",onClick:this.setRepeat},n.a.createElement("i",{style:{fontSize:"3vmin",color:"off"!=this.state.repeat_state?"#1DB954":this.state.accentColor},className:"material-icons queueButtons"},"track"==this.state.repeat_state?"repeat_one":"repeat")))))),n.a.createElement("div",{className:"col-6 align-self-center"},n.a.createElement(y,{loc:{size:70,right:10,top:55},playing:this.state.is_playing?"running":"paused",src:s})))):n.a.createElement("div",{className:"background",style:{backgroundImage:this.state.colors[this.state.colorIndex]}},n.a.createElement(d,{exit:this.exitSearch,enabled:this.state.search,selection:this.playSong,results:this.state.searchList,value:this.search}),n.a.createElement(v,{open:this.state.settingsOpen,close:this.closeSettings,color:this.state.background_color,accentColor:this.state.accentColor,changeColor:this.changeColor,changeTextColor:this.changeTextColor}),n.a.createElement(f,{exit:this.exitPlaylistView,enabled:this.state.playlistView,playlists:this.state.userPlaylists,startPlaylist:this.startPlaylist,width:"70vw",left:"15vw"}),n.a.createElement("div",{id:"topBar",className:"container-fluid px-0"},n.a.createElement("div",{className:"row justify-content-between mx-1",style:{marginTop:"2vmin"}},n.a.createElement("div",{className:"col-auto "},n.a.createElement("a",{className:"VinylStream",href:"https://danielpmarks.github.io/vinyl-stream/"},n.a.createElement("h1",{className:"VinylStream",style:{color:this.state.accentColor}},"Vinyl Stream"))),n.a.createElement("div",{className:"col-auto"},n.a.createElement("div",{className:"row justify-content-end"},n.a.createElement("button",{onClick:this.openSearch,className:"playbackButtons"},n.a.createElement("i",{className:"material-icons",style:{fontSize:"5vmin",color:this.state.accentColor}},"search")),n.a.createElement("button",{onClick:this.openPlaylistView,className:"playbackButtons"},n.a.createElement("i",{className:"material-icons",style:{fontSize:"5vmin",color:this.state.accentColor}},"playlist_play")),n.a.createElement("button",{onClick:this.openSettings,className:"playbackButtons"},n.a.createElement("i",{className:"material-icons",style:{fontSize:"5vmin",color:this.state.accentColor}}," settings"))))),n.a.createElement("hr",{style:{marginTop:"0vmin",border:"2px solid "+this.state.accentColor}})),n.a.createElement("div",{style:{height:"90%"},className:"col h-90"},n.a.createElement("div",{className:"col",style:{height:"30vh",marginTop:"65vh"}},n.a.createElement("div",{className:"container",style:{display:"block",color:this.state.accentColor}},n.a.createElement("div",{className:"row justify-content-center py-1"},n.a.createElement(p.a,{lines:2,className:"playerInfo",style:{fontSize:"7vmin",fontWeight:"bold"}},e)),n.a.createElement("div",{className:"row justify-content-center py-1"},n.a.createElement(p.a,{lines:1,className:"playerInfo",style:{fontSize:"4vmin"}},t)),n.a.createElement("div",{className:"row justify-content-center py-1"},n.a.createElement(p.a,{lines:1,className:"playerInfo",style:{fontSize:"3vmin"}},a))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center px-0"},n.a.createElement("button",{className:"playbackButtons",onClick:this.setShuffle},n.a.createElement("i",{style:{fontSize:"6vmin",color:this.state.shuffle_state?"#1DB954":this.state.accentColor},className:"material-icons queueButtons"},"shuffle")),n.a.createElement("div",{className:"row",style:{marginLeft:"2vmin",marginRight:"2vmin"}},n.a.createElement("button",{className:"playbackButtons",onClick:this.skipToPrevious},n.a.createElement("i",{style:{fontSize:"10vmin",color:this.state.accentColor},className:"material-icons"},"skip_previous")),n.a.createElement("button",{className:"playbackButtons",onClick:this.setPlayState},n.a.createElement("i",{style:{fontSize:"10vmin",color:this.state.accentColor},className:"material-icons"},this.state.playPause)),n.a.createElement("button",{className:"playbackButtons",onClick:this.skipToNext},n.a.createElement("i",{style:{fontSize:"10vmin",color:this.state.accentColor},className:"material-icons"},"skip_next"))),n.a.createElement("button",{className:"playbackButtons",onClick:this.setRepeat},n.a.createElement("i",{style:{fontSize:"6vmin",color:"off"!=this.state.repeat_state?"#1DB954":this.state.accentColor},className:"material-icons queueButtons"},"track"==this.state.repeat_state?"repeat_one":"repeat"))))),n.a.createElement("div",{className:"col-6 align-self-center"},n.a.createElement(y,{loc:{size:70,right:50,top:40},playing:this.state.is_playing?"running":"paused",src:s}))))}}]),a}(n.a.Component);var N=function(){return n.a.createElement("div",{className:"col text-center background",style:{backgroundImage:"linear-gradient(rgba(255, 187, 170, 1), rgba(254, 255, 225, 1))"}},n.a.createElement("h1",{style:{marginTop:"20vh",fontFamily:"Bungee Shade",fontSize:"10vmin"}},"Vinyl",n.a.createElement("br",null),"Stream"),n.a.createElement("a",{href:"https://vinyl-stream-backend.herokuapp.com/login"},n.a.createElement("button",{style:{borderRadius:"5vmin",fontSize:"5vmin",padding:"1vmin 6vmin 1vmin 6vmin",marginTop:"20vmin",backgroundColor:"#1DB954",color:"white",border:"none",fontFamily:"Roboto",outline:"none"}},"Sign in with Spotify")))};var S=function(){return function(){var e=window.location;return new URLSearchParams(e.search).get("access_token")}()?n.a.createElement(E,null):n.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.b3d956b6.chunk.js.map