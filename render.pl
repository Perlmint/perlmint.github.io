# render resume
`latexml resume/$_.tex --destination=resume.xml && latexmlpost --dest=out/resume/resume-$_.html resume.xml --css=resume.css` for ("en", "kr", "jp");
`rm resume.xml`;
