//____ Opens all images in a instagram profile page in new tabs ____

//Get all script tags on page
let scripts = Array.from(document.getElementsByTagName('script'));
//Get contents of script tag containing photo data
let scriptHTML = scripts.filter(script =>
  script.innerHTML.startsWith('window._sharedData')
)[0].innerHTML;
//Get JSON of photo data
let script = JSON.parse(scriptHTML.substring(21, scriptHTML.length - 1));
//Get photos array
let nodes =
  script.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media
    .edges;
//Get src of each photo
srcs = nodes.map(node => node.node.thumbnail_src);
//Open src of each photo in new tab
let opened = srcs.map(src => {
  console.log(src);
  window.open(src, '_blank');
});

//____ Opens current opened Instagram photo in a new tab ____
