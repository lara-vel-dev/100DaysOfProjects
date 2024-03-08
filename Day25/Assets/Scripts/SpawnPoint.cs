using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    // Global variables
    public GameObject obstacle;

    // Start is called before the first frame update
    void Start()
    {
        Instantiate(obstacle, transform.position, Quaternion.identity);
    }

}
