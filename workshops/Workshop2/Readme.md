# Week 2: In Class Learning

To Recap what we learned last week:
**HTML**
```
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
          <h1>Hello World.</h1>
           <!-- comments in the code do not appear on our websites -->
      </body>
    </html>

```

**Understanding HTML Syntax**

- HTML is a markup language
- HTML specifies structure: the meaning of the content rather than the style of content
- HTML uses a nesting structure

**The basics: headings and paragraphs**

----------
## Textual Elements: Headers, Paragraphs, Ordered/Unordered Lists


    <h1>This is the Largest Heading</h1>
    <h2>Second Largest Heading</h2>
    <h3>Third Largest Heading</h3>
    <h4>Third Smallest Heading</h4>
    <h5>Second Smallest Heading</h5>
    <h6>This is the Smallest Heading</h6>

    <p>Paragraphs go inside </p>
    <ul>
      <li></li>
      <li></li>
    </ul>
    <ol>
      <li></li>
      <li></li>
    </ol>

**Other Elements: Horizontal Rule, Line Breaks, Strong, and Emphasis**

    <hr>
    <br/>
    <strong> </strong>
    <em></em>


**👉** The *appearance* of these elements are set by default by the browser. We will learn later how to override these defaults. Thus, you should not use Strong or Emphasis for making things *look* bold or italic. These indicate semantic distinctions, not visual ones.

# End of Recap
# Start of today's lesson

**Today we are making two recipes to link to each other.**

*I've provided the text on recipe_a.html for the first recipe and I want you to create the page recipe_b.html an add a recipe you found online. We will link the two together.

*The ability to link one page to another, through various authors and pages is what make the web so powerful and successful.*

A link tag is called the <a> tag. a stands for anchor. The tag, like bold, underline, and emphasis, is an inline tag. You can link anything; one word in a paragraph, an image, a button, etc.

The link is a little more complex than our headings etc. We need to talk about attributes with links.

Here is an example of a link:
```
<a>Go to New York Times</a>

```
This text is surrounded by <a> link tags but we do not yet have a direction for the link. Let's give this link an address to direct to. To add this information, we'll add a special HTML attribute to the link called the "href" attribute (short for hypertext reference). Let's write this right in the opening <a> tag.
```
<a href='https://www.nytimes.com/'>Go to New York Times</a>

```
Add a space after the name of the tag 'a' and add [ href=" " ]
The link goes into the "" quotation marks.


**Different Types of Links**
The link we just made goes to a different website entirely. This is a link called "absolute".

Use a "relative" link if you are linking within your own website.
```
<a href='about.html'>About me</a>

```
You don't need your full url here, you just need to point to the direction of our page.

Use a link to compose an email:
```
<a href='mailto:olsea398@newschool.edu'>Send me an Email</a>

```
This link will pop open a new email to box to be delivered to my new school email. This href attribute starts with "mailto:" and after you will write the email address you want the link to send to.

Here is the link tag in context to an html page:

```
<html>
  <head>
    <title>Annaka's Homepage</title>
  </head>
  <body>
    <h1>Welcome to my Website</h1>
    <h2>Review of a Recent Film</h2>
    <p>That might sound like a familiar scenario after the last few months of lockdowns around the world, but it’s also the premise for <a href="https://en.wikipedia.org/wiki/Pedro_Almodóvar">Pedro Almodóvar’s new short film, “The Human Voice,” starring Tilda Swinton, which premiered at the Venice Film Festival last week.</p>
    You can <a href="filmreviews.html">see all reviews</a> here.
      </body>
  </html>
```


**Now lets try some images**
So far we have been making some text only websites and for the early days of the web this was great. As the purpose of the web expanded so does the needs and the <img> tag was created.

The browser needs to know which image to pull up. The "src" attribute (short for source) tells the browser where the image lives. Nothing nests within the image, thus it was created as a single tag without a closing.

Outside the images folder you'll find the image 'puppy.jpg'. Add the path of this image to your page:  

```
<p>
<img src="puppy.jpg">
</p>

```
Now drag the image into the images folder... and refresh the page. You can see the image is now broken. To fix let's add to the path of the src.
```
<p><img src="images/puppy.jpg"></p>
```
Refresh you page again and the link will be fixed. Now lets make a folder next to the images folder. Name it 'html' and add your current file. The path to the image now should be written:

```
<p><img src="../images/puppy.jpg"></p>
```
../ gets you to a folder level above the folder you are currently in. If the image folder is two folders above you'd add another '../'

```
<img src="../../images/puppy.jpg">
```

We put the relative image inside of a paragraph, relative meaning within our website files. Here is an example of an absolute image.

```
<p>
<img  src="https://i.imgur.com/orN5bcs.gif">
</p>
```

and if you'd like the change the size of the image...

```
<p>
<img  src="https://i.imgur.com/orN5bcs.gif" width="200">
</p>
```
You can add height="" width="" or both.
The number you put into "" will be counted in pixels.
We can also resize an image in CSS but thats for next week...
:)

**Image file types used on the web:**

# .jpg
— great quality color images

# .gif
— good animated images

# .png
— good for flatter color images or transparency

# .svg
— Scalable Vector Graphics do not pixelate.
Great for icons and logos.


## Now that we have the basics down...
Lets design and write some recipes.

Please html tag recipea.html and create from scratch recipeb.html.

Choose a recipe online and save an image of it. Copy the text of the recipe and add to your recipeb.html document. Tag it with headings, paragraphs, and lists. Put the image under your headlines. Then please link the two in any way you choose.

If you're done it time, make a third recipe. 
