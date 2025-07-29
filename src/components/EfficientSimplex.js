import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EfficientSimplex.css';
import { FaArrowLeft } from 'react-icons/fa';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function EfficientSimplex() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    // Scroll to research projects subsection after navigation
    setTimeout(() => {
      const researchSection = document.getElementById('research');
      if (researchSection) {
        // Find the research projects subtitle within the research section
        const researchProjectsTitle = researchSection.querySelector('.research-subtitle');
        if (researchProjectsTitle) {
          researchProjectsTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Fallback to the research section if subtitle not found
          researchSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <div className="efficient-simplex-section">
      <div className="efficient-simplex-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back to Research
        </button>
        
        <div className="efficient-simplex-content">
          <h1 className="efficient-simplex-title">Efficient Encoding of Graphics Primitives with Simplex-based Structures</h1>
          
          <div className="efficient-simplex-overview">
            <div className="overview-left">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <img src="/assets/img/tokyo.png" alt="Simplex-Based Graphical Encoding" />
                </div>
              </div>
              <p className="image-subtitle">Efficient simplex-based graphical encoding for high-dimensional data representation</p>
            </div>
            <div className="overview-right">
              <h2>Project Overview</h2>
              <p>
                This project addresses a fundamental computational bottleneck in neural graphics primitives, particularly building upon the limitations of Instant-NGP (Neural Graphics Primitives). While Instant-NGP revolutionized the field by enabling real-time neural rendering through multi-resolution hash encoding, it still suffers from exponential scaling issues inherent in grid-based structures.
              </p>
              
              <h3>Key Contributions</h3>
              <ul>
                <li><strong>Simplex-Based Encoding:</strong> Replaced grid-based structures with simplex-based structures inspired by simplex noise algorithms, achieving linear scaling O(n) instead of exponential scaling O(2^n)</li>
                <li><strong>Mathematical Framework:</strong> Developed coordinate skewing, simplicial subdivision, and barycentric interpolation for efficient sampling and interpolation</li>
                <li><strong>Performance Optimization:</strong> Achieved up to 41.2% speedup in volumetric rendering and 9.4% speedup in image fitting while maintaining equivalent quality</li>
                <li><strong>Memory Efficiency:</strong> Reduced memory usage from 87% in 2D to 35% in 4D applications with exponential decay for higher dimensions</li>
              </ul>
              
              <div className="efficient-simplex-links">
                <a href="https://arxiv.org/abs/2311.15439" target="_blank" rel="noopener noreferrer" className="link-button">
                  View Paper
                </a>
              </div>
            </div>
          </div>
          
          <div className="efficient-simplex-details">
            <h2>Research Context</h2>
            <p>
              The core problem lies in dimensional complexity: when encoding graphics primitives such as images, signed distance functions, and neural radiance fields using traditional grid-based approaches, sampling a point in n-dimensional space requires interpolating values from 2^n neighboring vertices. This exponential scaling becomes prohibitively expensive for high-dimensional applications, where 2D images require 4 vertices, 3D volumetric rendering needs 8 vertices, 5D NeRF applications demand 32 vertices, and higher dimensions become computationally intractable.
            </p>
            
            <p>
              The authors propose replacing grid-based structures with simplex-based structures inspired by simplex noise algorithms. The key insight is that simplices are polygons with the minimum number of vertices required to tile n-dimensional space. In 2D, triangles use 3 vertices versus 4 in squares; in 3D, tetrahedra use 4 vertices versus 8 in cubes; and in n-dimensional space, simplices use n+1 vertices versus 2^n in hypercubes. This fundamental difference results in linear scaling O(n) instead of exponential scaling O(2^n) with dimension, representing a significant computational advantage for high-dimensional graphics primitive encoding.
            </p>

            <h2>Mathematical Framework</h2>
            <p>
              The simplex-based encoding method involves four key mathematical components that work together to provide efficient sampling and interpolation.
            </p>

            <div className="image-placeholder">
              <div className="placeholder-content">
                <img src="/assets/img/simplex_process.png" alt="Simplex-Based Graphical Encoding" />
              </div>
            </div>
            <p className="image-subtitle">Simplex-based graphical encoding process diagram</p>

            <h3>Coordinate Skewing</h3>
            <p>
              The first component is coordinate skewing, which transforms input coordinates to align with simplex geometry using the formula:
            </p>
            
            <p>
              The coordinate skewing transformation can be expressed as:
            </p>
            
            <div className="math-equation">
              <BlockMath math="x' = x + \frac{1}{n} \cdot F_n \sum_i x_i" />
            </div>
            
            <p>
              where <InlineMath math="F_n = (\sqrt{n+1} - 1)/n" />.
            </p>
            
            <p>
              This transformation can be expressed as matrix multiplication where the sampled point x ∈ R^n is multiplied by a constant matrix. The coordinate skewing is an affine transformation that preserves the parallelism of planes and transforms the unit n-hypercube into an n-parallelepiped. This transformation is crucial as it reduces distortion in simplex cells, resulting in more balanced spatial division.
            </p>

            <h3>Simplicial Subdivision</h3>
            <p>
              The second component is simplicial subdivision, which locates the containing simplex after coordinate transformation. In n-dimensional space, the hypercube can be split into n! disjoint and congruent simplices. To locate the cell containing a given point, the algorithm determines which simplex cell among the n! simplices it resides in using a subdivision scheme from the simplex noise algorithm.
            </p>

            <h3>Barycentric Interpolation</h3>
            <p>
              The third component is barycentric interpolation, which provides an efficient alternative to traditional n-linear interpolation. Instead of generating random gradient vectors as in noise algorithms, the method retrieves learnable vectors at each vertex and interpolates them to obtain the final feature for the queried point. The barycentric coordinates are calculated using:
            </p>
            
            <p>
              The barycentric coordinates are calculated using:
            </p>
            
            <div className="math-equation">
              <BlockMath math="w_1 = 1 - x_1, \quad w_2 = x_1 - x_2, \quad \ldots, \quad w_n = x_{n-1} - x_n, \quad w_{n+1} = x_n" />
            </div>
            
            <p>
              where the entries of x are already sorted in descending order from the previous step. Compared to computationally expensive n-linear interpolation, this simpler formula for weights enables more efficient implementation while maintaining the quality of the interpolation.
            </p>

            <h3>Kernel Summation</h3>
            <p>
              The fourth component is kernel summation, which combines the interpolated features from multiple resolution levels. 
              The final feature for a queried point is computed as a weighted sum of interpolated features from different 
              resolution levels, where each level contributes according to its relevance to the final representation. 
              This multi-resolution approach allows the method to capture both fine-grained details and coarse structural 
              information, providing a comprehensive representation of the input space.
            </p>
            
            <p>
              The kernel summation can be expressed as:
            </p>
            
            <div className="math-equation">
              <BlockMath math="f(x) = \sum_{l=1}^{L} w_l \cdot f_l(x)" />
            </div>
            
            <p>
              where <InlineMath math="f_l(x)" /> represents the interpolated feature at resolution level <InlineMath math="l" />, 
              and <InlineMath math="w_l" /> are the learned weights that determine the contribution of each resolution level 
              to the final feature representation.
            </p>

            <h2>Implementation Details</h2>
            <p>
              The implementation integrates the simplex-based structure with Instant-NGP's multi-resolution hash encoding framework through a carefully designed pipeline. The diagram above illustrates the complete process for encoding a 2D point 'x' for input into a neural network, showing the five key steps: hashing, lookup, interpolation, concatenation, and neural network processing.
            </p>
            
            <p>
              The pipeline begins with hashing of voxel vertices, where surrounding neighbors are found at L different resolution levels and indices are assigned to their corners by hashing their integer coordinates. This is followed by a lookup phase where corresponding n-dimensional feature vectors are retrieved from hash tables for all resulting corner indices. The barycentric interpolation is then performed on neighboring coordinates according to the relative position of the input point within the respective level voxel. The results from each level are concatenated along with any auxiliary inputs to produce the encoded MLP input, which is then processed through a neural network with backpropagation through the MLP, concatenation, linear interpolation, and accumulated in the looked-up feature vectors.
            </p>

            <h3>Step-by-Step Process</h3>
            
            <h4>Panel (a): Hashing of Voxel Vertices</h4>
            <p>
              This step shows the multi-resolution approach where point 'x' (marked with a black circle) is processed 
              at different resolution levels. The red and blue dashed lines represent different resolution grids, with 
              two simplex structures (triangles) surrounding the point: a larger red triangle and a smaller blue triangle. 
              Each triangle has three vertices (red and blue circles) that are connected by solid lines. This step 
              finds surrounding neighbors at L different resolution levels and assigns indices to their corners by 
              hashing their integer coordinates.
            </p>

            <h4>Panel (b): Lookup</h4>
            <p>
              Two vertical arrays of squares represent hash tables (H_L) at different resolution levels. The top 
              array (red) and bottom array (blue) show retrieved feature vectors as filled squares. This step 
              looks up the corresponding n-dimensional feature vectors from hash tables for all resulting corner 
              indices identified in the previous step.
            </p>

            <h4>Panel (c): Barycentric Interpolation</h4>
            <p>
              Two isolated simplex structures (triangles) mirror those from panel (a), with point 'x' positioned 
              inside each triangle. Dashed lines connect point 'x' to each vertex, illustrating the barycentric 
              coordinates. Arrows extend from each triangle to their corresponding segments in panel (d). This 
              step performs barycentric interpolation on neighboring coordinates according to the relative position 
              of 'x' within the respective l-th voxel.
            </p>

            <h4>Panel (d): Concatenation</h4>
            <p>
              A single vertical bar represents the concatenated feature vector, divided into three colored segments: 
              red (top), blue (middle), and green (bottom). An upward arrow labeled 'ξ' (xi) points to the green 
              segment, indicating the inclusion of auxiliary inputs. This step concatenates results from each 
              resolution level (red and blue segments from interpolation) along with auxiliary inputs (green segment), 
              producing the encoded MLP input.
            </p>

            <h4>Panel (e): Neural Network</h4>
            <p>
              A generic feed-forward neural network is depicted with multiple layers of interconnected circular 
              nodes (neurons). The network includes an input layer, two hidden layers, and an output layer, 
              with lines representing network weights. This final step represents the neural network through which 
              the loss function is backpropagated, affecting the concatenation, linear interpolation, and ultimately 
              accumulated in the looked-up feature vectors.
            </p>
            


            <div className="image-placeholder-large">
              <div className="placeholder-content">
                <img src="/assets/img/process.png" alt="Simplex-Based Graphical Encoding" />
              </div>
            </div>
            <p className="image-subtitle">Simplex-based encoding implementation pipeline with multi-resolution hash encoding</p>

            <h2>Experimental Results</h2>
            <p>
              The experimental evaluation demonstrates the effectiveness of simplex-based encoding across multiple dimensions and applications, with comprehensive performance analysis and benchmark results.
            </p>

            <h3>Gigapixel Image Fitting</h3>
            <p>
              The gigapixel image fitting experiments demonstrate the effectiveness of the simplex-based approach in 2D applications. Using the Tokyo gigapixel photograph as a reference image with 439 million pixels, the simplex-based encoding successfully represents the image with hash maps and MLP parameters. After 10,000 iterations, the method represents the 439M pixel image with only 7.9M trainable parameters, achieving a compression ratio of approximately 55:1.
            </p>
            
            <p>
              The simplex-based encoding obtains a PSNR of 29.94 compared to 29.82 for grid-based encoding, while requiring 14.94 seconds versus 16.34 seconds for 10,000 iterations, representing a 9.4% speedup while maintaining equivalent quality.
            </p>

            <h3>Volumetric Rendering</h3>
            <p>
              The volumetric rendering experiments provide more compelling evidence of the simplex-based structure's advantages, particularly for Neural Radiance Fields applications. In volumetric rendering, pixel colors are computed by integrating over transmittance and density according to the equation <InlineMath math="C(r) = \int_{t_n}^{t_f} T(t)\sigma(r(t))c(r(t),d)dt" />, where <InlineMath math="T(t) = \exp(-\int_{t_n}^{t}\sigma(r(s))ds)" />.
            </p>
            
            <p>
              The inherent sequential dependency in transmittance calculation, where T(t) depends on previously sampled densities and cannot be evaluated in parallel, makes the simplex-based implementation extremely efficient. As the number of samples increases, the runtime of the entire algorithm approaches theoretical bounds, achieving up to 41.2% speedup when samples are dense enough.
            </p>

            <div className="image-placeholder-large">
              <div className="placeholder-content">
                <img src="/assets/img/simplex_result.png" alt="Volumetric Rendering" />
              </div>
            </div>
            <p className="image-subtitle">Volumetric rendering results demonstrating simplex-based encoding performance</p>

            <h2>Performance Analysis</h2>
            <p>
              The kernel analysis provides comprehensive performance evaluation across multiple dimensions and platforms. Using an Intel Core i7-8700K CPU with 6 cores and 12 threads running at 2.6 GHz with 16 GB RAM, both baseline grid implementation and the proposed simplex hash implementation were tested across various dimensional inputs.
            </p>
            
            <p>
              The experiments used 2^27 cells with randomly sampled 2^10 data points inside the n-dimensional structure, with computations performed 1000 times to produce measurable results and averaged over 5 runs for statistical reliability. The results clearly demonstrate that simplex-based encoding scales linearly with dimension while grid-based structure scales exponentially, matching theoretical predictions about the exponential growth of vertices with respect to dimension.
            </p>

            <h3>Memory Usage Analysis</h3>
            <p>
              Memory usage analysis reveals significant efficiency gains as dimensionality increases. The theoretical memory usage ratio of (n+1)^(-n-1)/2 shows exponential decay, with practical measurements confirming this trend. In 2D applications, simplex structures use approximately 87% of grid memory requirements, reducing to about 58% in 3D, 35% in 4D, and continuing to decrease exponentially for higher dimensions.
            </p>
            
            <p>
              The analytical percentage of memory usage with different levels shows that as the level increases, the ratio quickly converges to the theoretical lower bound, validating the use of hash tables with sizes based on theoretical ratios to achieve similar quality compared to collision-free implementations.
            </p>

            <h3>Scalability Characteristics</h3>
            <p>
              The performance scaling characteristics become increasingly favorable as dimensionality increases. In lower dimensions such as 2D image fitting, the simplex-based structure requires information from 3 neighboring vertices compared to 4 for grid-based structures, but includes additional computational overhead for coordinate skewing and simplicial subdivision. However, as dimensionality increases, the exponential growth in grid vertex requirements (2^n) versus linear growth in simplex vertices (n+1) creates increasingly significant performance advantages.
            </p>
            
            <p>
              The repetitive sampling nature of applications like volumetric rendering makes the computational overhead for sorting coordinates in simplicial subdivision negligible, allowing the method to achieve performance close to theoretical bounds. This scalability advantage makes simplex-based encoding particularly well-suited for high-dimensional graphics applications where traditional grid-based methods become computationally prohibitive.
            </p>

            <h2>Applications and Impact</h2>
            <p>
              The simplex-based encoding method has significant implications for high-dimensional graphics applications, particularly in neural rendering and computer graphics. The linear scaling with dimension makes it particularly well-suited for applications that were previously computationally prohibitive with grid-based approaches.
            </p>

            <h3>Neural Radiance Fields (NeRF)</h3>
            <p>
              The method shows particular promise for NeRF applications, where the 5D nature of the problem (3D position + 2D viewing direction) makes traditional grid-based approaches computationally expensive. The simplex-based approach reduces the vertex requirements from 32 (2^5) to 6 (5+1), providing substantial computational savings.
            </p>

            <h3>Signed Distance Functions (SDF)</h3>
            <p>
              For SDF applications in 3D space, the simplex-based approach reduces vertex requirements from 8 to 4, while maintaining the quality of the representation. This efficiency gain is particularly valuable for real-time applications where computational resources are limited.
            </p>

            <h3>Future Work</h3>
            <p>
              Future work could explore the application of simplex-based encoding to even higher-dimensional problems, such as 6D light field representations or 7D spacetime rendering. The theoretical framework provides a foundation for extending these benefits to domains beyond traditional computer graphics, potentially including scientific visualization and data compression applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EfficientSimplex; 