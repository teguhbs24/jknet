<script>
var numposts = 5;
var standardstyling = true;
</script>
<script type="text/javascript">function showrecentposts(json) {
for (var i = 0; i < numposts; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}}
posttitle = posttitle.link(posturl);
if (standardstyling) document.write('<li>');
document.write(posttitle);}
if (standardstyling) document.write('</li>
');}</script>
<script src="http://jangankelewatan.net/feeds/posts/default/-/browser?orderby=published&amp;alt=json-in-script&amp;callback=showrecentposts&amp;max-results=500"></script>
