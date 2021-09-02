import React from 'react';
import {MdDragHandle} from 'react-icons/md';
import {
  FiXCircle,
  FiSave,
  FiActivity,
  FiCheckSquare,
  FiPauseCircle,
  FiTrash2,
  FiEdit,
  FiPlus,
  FiCalendar,
  FiMoreHorizontal
} from 'react-icons/fi';

import {Container} from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <div className="title-line">
          <h2>Create layout</h2>

          <div className="controls">
            <FiXCircle />
            <FiSave />
            <FiActivity />
            <FiCheckSquare />
            <FiPauseCircle />
            <FiTrash2 />
            <FiEdit />
          </div>
        </div>
        <div className="deadline">
          <FiCalendar size={16} color="var(--txt-content)"/>
          <p>09/02</p>
        </div>
      </header>
      <main>
        <section className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus assumenda eaque tempora officiis harum nulla perspiciatis sunt doloremque?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus porro doloribus ab fugiat vitae officiis, voluptates nisi quasi ea, illum dolorum veritatis quos blanditiis veniam enim reiciendis sit repudiandae aperiam.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos. Eum harum consectetur accusamus libero ea quis placeat ipsa voluptatum vero, sequi corporis earum reiciendis, vitae dolor dolorem provident corrupti.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique excepturi temporibus assumenda odit quaerat, iste, quam quis fugit eum nulla, totam blanditiis enim deleniti laboriosam veniam aliquid optio labore.</p>
          <FiMoreHorizontal />
        </section>
      </main>
      <footer>
        <div className="info">
          <div className="area">
            <div className="add-area">
              <button>
                <FiPlus />
              </button>
            </div>
            <div className={"front"}></div>
            <div className={"back"} ></div>
          </div>
          <div className="employee">
              <div className="avatar-portrait">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="João Gabriel" />
              </div>
              <div className="avatar-portrait">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Miguel Fontes" />
              </div>
              <div className="avatar-portrait">
                <img src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80" alt="Ana Vitória" />
              </div>
            <div className="add-employee">
              <button>
                <FiPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="grabbing-bar">
            <MdDragHandle />
        </div>
      </footer>
    </Container>
  )
}

/*
            <div className="avatar-portrait">
              <img src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Maria Eduarda" />
            </div>
            <div className="avatar-portrait">
              <img src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80" alt="Pedro Lucas" />
            </div>
*/