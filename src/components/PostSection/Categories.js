import Heading from '../UI/Heading';
import Category from '../BlogCard/Category';

export default function Categories({ className, heading = true, active }) {
  return (
    <div className={className}>
      {heading && <Heading text='Categories' />}
      <Category
        name='Gadget'
        image='https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        active={active}
      />
      <Category
        name='Programming'
        image='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        active={active}
      />
      <Category
        name='Design'
        image='https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        active={active}
      />
    </div>
  );
}
