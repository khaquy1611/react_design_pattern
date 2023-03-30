import useListings from './useListings'

const Listings = () => {
  const listings = useListings()
  return (
    <div>
      {listings.map((listing: any) => (
        <div key={listing.id}>
          <h3>{listing.title}</h3>
          <p>{listing.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Listings
