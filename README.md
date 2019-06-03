## Grid-Based-Framework

#### Assignment: Design a grid based framework

In this project, we have designed a grid, based on 12 columns as seen in the [sample site](https://rawcdn.githack.com/uche-inyama/Grid-Based-Framework/d6b3ec3ad1ada90454187f6868535236f1888ccf/index.html) attached to this repository.  
Reference material can be found under [this](https://www.theodinproject.com/courses/html5-and-css3/lessons/design-your-own-grid-based-framework) section of the Odin Project. 

We have also made the grid responsive based on the following breakpoints:

|     Breakpoint         |     suffix    |    .col (usage)  |
|------------------------|:-------------:|:----------------:|
|       < 576px          |      xs       | .col-xs-{size}   |
| 576px < 768px          |      sm       | .col-sm-{size}   |
| 768px < 992px          |      md       | .col-md-{size}   |
| 992px < 1008px         |      lg       | .col-lg-{size}   |
|       > 1300px         |      xl       | .col-xl-{size}   |

We have also made it possible to customize the grid to any number of columns (think carefully to work within specific bounds for better adaptability on different screens sizes)

##### How To
Update the number of columns variable in the _grid.scss file 

```javascript
$cols: 12;
```

You will have to recompile with sass npm package to generate a new framework.css file.

#### Contributors
* [Uchechukwu Inyama Henry](https://github.com/uche-inyama)
* [Iga Kigongo Edward](https://github.com/igakigongo)

#### Insipirations
* [Bootstrap](https://getbootstrap.com)
* [Insipirational Pixels](https://inspirationalpixels.com/grid-system-with-sass/)
* [Zellwk Blog](https://zellwk.com/blog/responsive-grid-system/)
