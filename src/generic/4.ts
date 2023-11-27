/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IProps {
  tittle: string
  
}


class Component<T>  {
  constructor (public props:T) {

  }
}

class Page extends Component<IProps> {
  pageInfo () {
    console.log(this.props.tittle);
  }
}

export {};