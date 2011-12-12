WYSIWYP - What You See Is What You Print

I’ve been annoyed by some sites that don’t print what appears on the screen, notably GitHub.com.

This is due to the stylesheet link specifying the media attribute with just “screen” (and there is no corresponding “print” link), so the print rendering does not use the stylesheet. 

```html
<link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-74801ded75693533333ef343dece5bacb90ed607.css" media="screen" rel="stylesheet" type="text/css" />
```

So if you tweak the source to add “print” or just remove the media attribute, you’ll get the print version styled the same as the screen.

I was tweaking this manually using the Safari Web Inspector, now I have a Safari Extension to do it automagically.
