import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`

`
const Backdrop = styled.div``


const DetailPresenter = ({ result, loading, error }) => null

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default DetailPresenter