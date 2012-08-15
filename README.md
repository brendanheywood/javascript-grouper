

A js library for grouping datasets into simple structured html chunks.

Eg in a facebook feed multiple updates by the same person might be grouped together with the avatar icon only shown once, or if 10 users like the same thing or change their status, these are grouped together.

Another example is merging table cells when they are the same as the previous row.

It takes a javascript array and a function that returns an array of each chunks which it then de-duplicates and returns for rendering.


An example:

Let suppose you want to show a list of messages by people. You might have some markup like:

```
<div><img src=person1.jpg> <i>Comment 1</i> </div>
<div><img src=person2.jpg> <i>Comment 2</i> </div>
<div><img src=person2.jpg> <i>Comment 3</i> </div>
<div><img src=person3.jpg> <i>Comment 4</i> </div>
```

That looks ok, but then you want to group the items by Avatar when adjacent messages are by the same person.

So first you split each row into three items:

```
<div><img src=person1.jpg>  |  <i>Comment 1</i>  |  </div>
<div><img src=person2.jpg>  |  <i>Comment 2</i>  |  </div>
<div><img src=person2.jpg>  |  <i>Comment 3</i>  |  </div>
<div><img src=person3.jpg>  |  <i>Comment 4</i>  |  </div>
```

Now you just want to remove the last component in the rows which are going to be repeated (comment 2), and also
remove the first component for the rows where they have been repeated (comment 3):

```
<div><img src=person1.jpg>  |  <i>Comment 1</i>  |  </div>
<div><img src=person2.jpg>  |  <i>Comment 2</i>  |  
                            |  <i>Comment 3</i>  |  </div>
<div><img src=person3.jpg>  |  <i>Comment 4</i>  |  </div>
```

This logic works because the first and last components (the open and close div) match each other. The center component is always shown.

This concept can be extended up to any level of nested, ie it could have 5, 7, 9 etc components.



