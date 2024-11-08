import * as React from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getTypes } from "../service/types-service";
import TypesItem from "../components/types_components/TypesItem";
import { Breadcrumb, Button } from "react-bootstrap";

export const Route = createLazyFileRoute("/types")({
  component: Types,
});

function Types() {
  const { user, token } = useSelector((state) => state.auth);

  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTypesData = async () => {
      setIsLoading(true);
      const result = await getTypes();
      if (result.success) {
        setTypes(result.data);
      }
      setIsLoading(false);
    };

    if (token) {
      getTypesData();
    }
  }, [token]);

  if (!token) {
    return (
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Please login first to get type data!</h1>
        </Col>
      </Row>
    );
  }

  if (isLoading) {
    return (
      <Row className="mt-4">
        <h1>Loading...</h1>
      </Row>
    );
  }

  return (
    <>
      <Row className="d-flex justify-content-between align-items-center mt-3">
        <Col xs="auto">
          {/* Breadcrumb di kiri */}
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/types">Types</Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        {user && user?.role_id === 1 && (
          <Col xs="auto" className="mx-5">
            {/* Button di kanan */}
            <Button
              as={Link}
              to="/types-routes/create"
              style={{ backgroundColor: "#0D28A6", border: "0px" }}
            >
              + Add New Type
            </Button>
          </Col>
        )}
      </Row>

      <Row className="mt-4">
        {types.length === 0 ? (
          <h1>Type data is not found!</h1>
        ) : (
          types.map((type) => <TypesItem type={type} key={type?.id} />)
        )}
      </Row>
    </>
  );
}
