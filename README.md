<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dcorrelation

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [correlation distance][correlation-distance] between two double-precision floating-point strided arrays.

<section class="intro">

The [correlation distance][correlation-distance] between random variables `X` and `Y` is defined as

<!-- <equation class="equation" label="eq:sample_correlation_distance" align="center" raw="D(X, Y) = 1 - \frac{\displaystyle\sum_{i=0}^{N-1} (x_i - \bar{x})(y_i - \bar{y})}{\displaystyle\sqrt{\sum_{i=0}^{N-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{N-1} (y_i - \bar{y})^2}}" alt="Equation for the sample correlation distance."> -->

```math
D(X, Y) = 1 - \frac{\displaystyle\sum_{i=0}^{N-1} (x_i - \bar{x})(y_i - \bar{y})}{\displaystyle\sqrt{\sum_{i=0}^{N-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{N-1} (y_i - \bar{y})^2}}
```

<!-- </equation> -->

where `x_i` and `y_i` are the _ith_ components of vectors **X** and **Y**, respectively.

<!-- </equation> -->


</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-strided-distances-dcorrelation
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var dcorrelation = require( '@stdlib/stats-strided-distances-dcorrelation' );
```

#### dcorrelation( N, x, strideX, y, strideY )

Computes the [correlation distance][correlation-distance] of two double-precision floating-point strided arrays.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( [ 2.0, -2.0, 1.0 ] );

var c = dcorrelation( x.length, x, 1, y, 1 );
// returns ~0.115
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the [correlation distance][correlation-distance] of every other element in `x` and `y`,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float64Array( [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );

var c = dcorrelation( 4, x, 2, y, 2 );
// returns ~0.053
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( [ 2.0, -2.0, 2.0, 1.0, -2.0, 4.0, 3.0, 2.0 ] );

var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var c = dcorrelation( 4, x1, 2, y1, 2 );
// returns ~0.693
```

#### dcorrelation.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the [correlation distance][correlation-distance] of two double-precision floating-point strided arrays using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( [ 2.0, -2.0, 1.0 ] );

var c = dcorrelation.ndarray( x.length, x, 1, 0, y, 1, 0 );
// returns ~0.115
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the [correlation distance][correlation-distance] for every other element in `x` and `y` starting from the second element

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y = new Float64Array( [ -7.0, 2.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );

var c = dcorrelation.ndarray( 4, x, 2, 1, y, 2, 1 );
// returns ~0.073
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 1`, both functions return `NaN`.
-   If all values in either `x` or `y` are constant, the [correlation distance][correlation-distance] is not defined.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var dcorrelation = require( '@stdlib/stats-strided-distances-dcorrelation' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -50, 50, opts );
console.log( x );

var y = discreteUniform( 10, -50, 50, opts );
console.log( y );

var c = dcorrelation( x.length, x, 1, y, 1 );
console.log( c );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/strided/distances/dcorrelation.h"
```

#### stdlib_strided_dcorrelation( N, \*X, strideX, \*Y, strideY )

Computes the [correlation distance][correlation-distance] between two double-precision floating-point strided arrays.

```c
const double x[] = { 1.0, -2.0, 2.0 };
const double y[] = { 2.0, -2.0, 1.0 };

double c = stdlib_strided_dcorrelation( 3, x, 1, y, 1 );
// returns ~0.115
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[in] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
double stdlib_strided_dcorrelation( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY );
```

#### stdlib_strided_dcorrelation_ndarray( N, \*X, sx, ox, \*Y, sy, oy )

Computes the [correlation distance][correlation-distance] between two double-precision floating-point strided arrays using alternative indexing semantics.

```c
const double x[] = { 1.0, -2.0, 2.0 };
const double y[] = { 2.0, -2.0, 1.0 };

double c = stdlib_strided_dcorrelation_ndarray( 3, x, 1, 0, y, 1, 0 );
// returns ~0.115
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[in] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
double stdlib_strided_dcorrelation_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/strided/distances/dcorrelation.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };
    const double y[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

    // Specify the number of elements:
    const int N = 8;

    // Specify strides:
    const int strideX = 1;
    const int strideY = -1;

    // Compute the correlation distance between `x` and `y`:
    double d = stdlib_strided_dcorrelation( N, x, strideX, y, strideY );

    // Print the result:
    printf( "Correlation Distance: %lf\n", d );

    // Compute the correlation distance between `x` and `y` with offsets:
    d = stdlib_strided_dcorrelation_ndarray( N, x, strideX, 0, y, strideY, N-1 );

    // Print the result:
    printf( "Correlation Distance: %lf\n", d );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided-distances-dcorrelation.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided-distances-dcorrelation

[test-image]: https://github.com/stdlib-js/stats-strided-distances-dcorrelation/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-strided-distances-dcorrelation/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided-distances-dcorrelation/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided-distances-dcorrelation?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided-distances-dcorrelation.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided-distances-dcorrelation/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided-distances-dcorrelation/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided-distances-dcorrelation/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided-distances-dcorrelation/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided-distances-dcorrelation/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided-distances-dcorrelation/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided-distances-dcorrelation/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided-distances-dcorrelation/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-strided-distances-dcorrelation/main/LICENSE

[correlation-distance]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient#Pearson's_distance

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
