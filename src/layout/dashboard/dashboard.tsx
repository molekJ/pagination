import { useState, useEffect } from "react";
import { Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Post } from "../../components/Post";
import { PostInterface } from "../../types/interfaces";
import { Pagin } from "../../components/Pagin";

export const Dashboard = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataFetch = await res.json();
      setPosts(dataFetch);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [searchingText, setSearchingText] = useState("");

  const filteredPosts = posts.filter((post) => {
    return (
      post.body.includes(searchingText) || post.title.includes(searchingText)
    );
  });

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Container className="mt-5 justify-content-center">
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="searchText">
              <Row className="align-items-center">
                <Col xs={1}>
                  <Form.Label>Search</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter text"
                    onChange={(e) => {
                      setSearchingText(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group controlId="pagination">
              <Row className=" align-items-center">
                <Col xs="auto">
                  <Form.Label>Items per page </Form.Label>
                </Col>
                <Col xs="auto">
                  <Form.Select
                    onChange={(e) => {
                      const numberOfPost = parseInt(e.target.value);
                      setCurrentPage(1);
                      setPostsPerPage(numberOfPost);
                    }}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <ListGroup className="mb-4">
              {currentPosts.map((post) => {
                return (
                  <Post
                    body={post.body}
                    title={post.title}
                    id={post.id}
                    userId={post.userId}
                  />
                );
              })}
            </ListGroup>
            <Pagin
              postsPerPage={postsPerPage}
              totalPages={filteredPosts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        )}
      </Container>
    </>
  );
};
