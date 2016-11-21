# render resume
sub latexml {
  $in=shift;
  $out=shift;
  $css=shift;
  if ($css) {
    $css = "--css=$css";
  }
  print "run latexml for $in";
  `latexml --inputencoding=utf-8 $in --destination=tmp.xml && latexmlpost --dest=$out tmp.xml $css`;
}

latexml("resume/$_.tex", "out/resume/resume-$_.html", "resume.css") for ("en", "kr", "jp");
`rm tmp.xml`;
print "copy resume.css";
`cp resume/resume.css out/resume/resume.css`;
