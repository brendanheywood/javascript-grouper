

A js library for grouping datasets into simple structured html chunks.

Eg in a facebook feed multiple updates by the same person might be grouped together with the avatar icon only shown once, or if 10 users like the same thing or change their status, these are grouped together.

Another example is merging table cells when they are the same as the previous row.

It takes a javascript array and a function that returns an array of each chunks which it then de-duplicates and returns for rendering.




