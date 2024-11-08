import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { deleteType, getDetailType } from '../../service/types-service'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

export const Route = createFileRoute('/types-routes/TypesItem')({
  component: TypesItem,
})

function TypesItem() {
  const { id } = Route.useParams()

  const navigate = useNavigate()

  const { user, token } = useSelector((state) => state.auth)
  const [type, setType] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)

  useEffect(() => {
    const getDetailTypeData = async (id) => {
      setIsLoading(true)
      const result = await getDetailType(id)
      if (result?.success) {
        setType(result.data)
        setIsNotFound(false)
      } else {
        setIsNotFound(true)
      }
      setIsLoading(false)
    }

    if (id) {
      getDetailTypeData(id)
    }
  }, [id])

  if (isLoading) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Loading...</h1>
        </Col>
      </Row>
    )
  }

  if (isNotFound) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Type is not found!</h1>
        </Col>
      </Row>
    )
  }

  const onDelete = async (event) => {
    event.preventDefault()

    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this data?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const result = await deleteType(id)
            if (result?.success) {
              navigate({ to: '/types' })
              return
            }

            toast.error(result?.message)
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    })
  }
  return (
    <Col md={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{type?.type}</Card.Title>
          <Card.Text>{type?.description}</Card.Text>
          <Button
            as={Link}
            href={`/types-routes/${type?.id}`}
            variant="primary"
          >
            Detail Types
          </Button>
          <div className="d-flex justify-content-between mt-2">
            <Button
              variant="outline-danger"
              className="d-flex align-items-center"
              style={{ fontWeight: 700, padding: '0.5rem 1.6rem' }}
            >
              <img
                src="/assets/image/fi_trash-2.png"
                alt="Delete Icon"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              Delete
            </Button>

            <Button
              variant="success"
              className="d-flex align-items-center"
              style={{ fontWeight: 700, padding: '0.5rem 1.6rem' }}
              as={Link}
              to={`/types-routes/edit/${type?.id}`}
            >
              <img
                src="../../../public/assets/image/fi_edit.png"
                alt="Edit Icon"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
