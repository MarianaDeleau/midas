import React from 'react'
import PropTypes from 'prop-types'
import { Form, Radio, Select } from 'antd';

const { Option } = Select;

const FilterForm = (props) => {

   const { style, onChangeValue } = props

   const [form] = Form.useForm()
   return (
      <Form
         style={style}
         layout={'vertical'}
         form={form}
         onValuesChange={() => onChangeValue(form.getFieldsValue())}
      >
         <Form.Item name="order_by" label="Ordenar por:">
            <Radio.Group>
               <Radio value="date">Fecha</Radio>
               <Radio checked value="relevance">Relevancia</Radio>
            </Radio.Group>
         </Form.Item>

         <Form.Item
            name="categories"
            label="Categorías:"
         >
            <Select mode="multiple" placeholder="Seleccione categorías">
               <Option value="tech">Tecnología</Option>
               <Option value="media">Medios de comunicación</Option>
               <Option value="travel">Viajes</Option>
               <Option value="under_construction">En construcción</Option>
               <Option value="education">Educación</Option>
               <Option value="entertainment">Entretenimiento</Option>
               <Option value="social">Social</Option>
               <Option value="politics">Política</Option>
               <Option value="sports">Deportes</Option>
               <Option value="uncategorized">Sin categorizar</Option>
               <Option value="music">Música</Option>
            </Select>
         </Form.Item>
      </Form>
   )
}

FilterForm.propTypes = {
   style: PropTypes.any,
   onChangeValue: PropTypes.func
}

export default FilterForm
