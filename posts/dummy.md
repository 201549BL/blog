---
layout: post
title: Markdown ipsum test
img: /images/workout.jpg
---

# A First Level Header

![Alt text](/images/flowers.avif "a title")

## A Second Level Header

### A Third Level Header

#### A Fourth Level Header

##### A Fifth Level Header

###### A Sixth Level Header

This is a paragraph. Cupcake ipsum dolor sit amet. Tiramisu liquorice gummies powder. Biscuit pastry pastry cake candy gummies carrot cake gingerbread. Gummi bears tart cupcake bonbon sugar plum biscuit. Icing marzipan tootsie roll. Pie gingerbread dragée wypas cookie. Faworki bonbon topping sweet soufflé jelly.

And another paragraph. Jelly beans tootsie roll fruitcake toffee wypas chupa chups pudding. Soufflé muffin halvah powder sugar plum cake. Inline link: [This is an example link](http://example.com/)Toffee cookie biscuit faworki pastry. Bonbon gummi bears topping caramels marshmallow. Chupa chups candy canes toffee. Powder powder candy canes pastry. Tootsie roll marshmallow powder.

[Click for Google](https://www.google.com).

[This is an example link with a title](http://example.com/ "¡Buenos días!").

And another paragraph. Jelly beans tootsie roll fruitcake toffee wypas chupa chups pudding. Soufflé muffin halvah powder sugar plum cake. Toffee cookie biscuit faworki pastry. Bonbon gummi bears topping caramels marshmallow. Chupa chups candy canes toffee. Powder powder candy canes pastry. Tootsie roll marshmallow powder.

_These words are emphasized_  
_Also these words are emphasized_

**These words are strong emphasized**  
**Also these words are strong emphasized**

> This is a very simple blockquote

- This
- is
- an
- unordered
- list.

And...

1.  This
2.  is
3.  an
4.  ordered
5.  list.

```js
import React from "react";
import { Button } from "../styles/Buttons";
import {
  IoSunnyOutline,
  IoSunny,
  IoMoonOutline,
  IoMoon,
} from "react-icons/io5";
import { Icon } from "../styles/Icon";
import { useTheme } from "styled-components";

const renderIcon = (type) => {
  return type === "dark" ? <IoSunny /> : <IoMoon />;
};
const ThemeToggleButton = ({ onClick }) => {
  const { type } = useTheme();

  return (
    <Button onClick={onClick}>
      <Icon>{renderIcon(type)}</Icon>
    </Button>
  );
};

export default ThemeToggleButton;
```

And that's all ...
This is an **extremely simple and basic** guide. To understand a lot better this kind of dark magic called markdown, logically I recommend the official wiki of the creator. Go, run, jump to [the site of John Gruber](http://daringfireball.net/projects/markdown/).
