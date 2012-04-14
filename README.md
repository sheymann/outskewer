*Outskewer* is a free and open-source library to detect outliers in data sets of numbers and in time series. It is distributed under the [MIT License](https://github.com/sheymann/outskewer.r/blob/master/LICENSE.txt).

*Outskewer* uses a novel approach based on the notion of skewness (a measure of the distribution symmetry) and its evolution when extremal values are removed one by one. It is easy to interpret because values are classified as outliers, potential outliers or not outliers. The class of all values is unknown when the notion of outlier is not relevant in the considered data set. Our method is also easy to use because it requires no prior knowledge on the data, and the only parameter is the size of the time window for time series. Moreover, it may be used on-line.

###Research paper
S. Heymann, M. Latapy, and C. Magnien. "Outskewer: Using Skewness to Spot Outliers in Samples and Time Series", submitted to ASONAM'12.

###Implementations
* [outskewer.R](https://github.com/sheymann/outskewer.r)

###Want to discuss about the method?
Fill an [issue ticket](https://github.com/sheymann/outskewer/issues) to ask questions and discuss its behavior. I prefer to use github issue tracker than email for this kind of discussions, because this is public so it could benefit to anyone.

###Want to contribute?
We need more implementations in other languages. An implementation in C is the priority.